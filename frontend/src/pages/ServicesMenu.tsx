import { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronDown } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import './ServicesMenu.scss';

type ServiceCategory = { name: string };
type Service = {
  id: number;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  category?: ServiceCategory;
  imageUrl?: string;
};

const ServicesMenu = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(3);
                return;
            }
            setVisibleCount(6);
        };

        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);

        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                // First attempt backend
                const res = await axios.get('/api/services');
                if (res.data.length > 0) {
                     setServices(res.data);
                } else {
                     mockServices();
                }
            } catch (error) {
                console.error("Backend not running or error, using mock data", error);
                mockServices();
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    const mockServices = () => {
        setServices([
            { id: 1, name: "Hair Cut", description: "Precision cut tailored to your face shape and hair texture, finished with professional styling for a polished everyday look.", price: 45, durationMinutes: 30, category: { name: "Hair" }, imageUrl: "/g2.png" },
            { id: 2, name: "Styling", description: "Expert blow-dry and styling service that adds volume, smoothness, and long-lasting shape for events or daily confidence.", price: 35, durationMinutes: 45, category: { name: "Hair" }, imageUrl: "/g1.png" },
            { id: 3, name: "Keratin Smooth", description: "Frizz-control keratin treatment that deeply smooths rough strands, improves manageability, and enhances mirror-like shine.", price: 110, durationMinutes: 90, category: { name: "Hair" }, imageUrl: "/g4.jpg" },
            { id: 4, name: "Hair Spa", description: "Nourishing hair spa ritual with cleansing, mask therapy, and relaxing scalp massage to repair dryness and restore softness.", price: 75, durationMinutes: 60, category: { name: "Hair" }, imageUrl: "/g3.jpg" },
            { id: 5, name: "Hair Color", description: "Customized global color application with tone consultation and post-color care to protect vibrancy and hair health.", price: 95, durationMinutes: 120, category: { name: "Hair" }, imageUrl: "/g7.png" },
            { id: 6, name: "Root Touch Up", description: "Quick root correction service for seamless color blending, ideal for grey coverage and maintaining salon-fresh results.", price: 55, durationMinutes: 45, category: { name: "Hair" }, imageUrl: "/g2.png" },
            { id: 7, name: "Scalp Detox", description: "Purifying scalp exfoliation and detox treatment that removes buildup, improves circulation, and supports stronger hair growth.", price: 60, durationMinutes: 45, category: { name: "Hair" }, imageUrl: "/g9.png" },
            { id: 8, name: "Facials", description: "Deep-cleansing facial with steam, exfoliation, and mask therapy to refresh skin texture and reveal a healthy, balanced glow.", price: 80, durationMinutes: 60, category: { name: "Skin" }, imageUrl: "/g5.jpg" },
            { id: 9, name: "Cleanup", description: "Express skin cleanup designed to remove dullness, unclog pores, and instantly brighten your complexion before outings.", price: 40, durationMinutes: 30, category: { name: "Skin" }, imageUrl: "/g6.jpg" },
            { id: 10, name: "Hydra Facial", description: "Intensive hydration facial combining serum infusion and soothing massage to deeply moisturize and plump tired skin.", price: 95, durationMinutes: 75, category: { name: "Skin" }, imageUrl: "/g5.jpg" },
            { id: 11, name: "Acne Control Facial", description: "Targeted acne-care treatment with clarifying actives that calm inflammation, reduce oiliness, and support clearer skin.", price: 85, durationMinutes: 70, category: { name: "Skin" }, imageUrl: "/g6.jpg" },
            { id: 12, name: "Pigmentation Care", description: "Tone-evening skin protocol focused on dark spots and uneven patches, leaving your complexion brighter and smoother.", price: 90, durationMinutes: 80, category: { name: "Skin" }, imageUrl: "/g5.jpg" },
            { id: 13, name: "Oxy Glow Therapy", description: "Revitalizing oxygen infusion treatment that energizes dull skin, boosts glow, and gives a fresh luminous finish.", price: 88, durationMinutes: 60, category: { name: "Skin" }, imageUrl: "/g6.jpg" },
            { id: 14, name: "Under-Eye Renewal", description: "Cooling eye-area care to reduce puffiness and tiredness while improving hydration and brightness around the eyes.", price: 50, durationMinutes: 35, category: { name: "Skin" }, imageUrl: "/g5.jpg" },
            { id: 15, name: "Bridal Makeup", description: "Complete bridal makeover including skin prep, long-wear base, eye artistry, and finishing details for photo-perfect beauty.", price: 250, durationMinutes: 180, category: { name: "Makeup" }, imageUrl: "/g8.png" },
            { id: 16, name: "Deep Tissue Massage", description: "Therapeutic deep tissue massage focused on muscle tension relief, improved flexibility, and full-body relaxation.", price: 120, durationMinutes: 60, category: { name: "Spa & massage" }, imageUrl: "/g9.png" }
        ]);
    };

    if (loading) {
        return <div className="servicesLoading">Loading premium services...</div>;
    }

    const groupedServices = services.reduce<Record<string, Service[]>>((acc, current) => {
        const catName = current.category?.name || 'Other';
        acc[catName] ??= [];
        acc[catName].push(current);
        return acc;
    }, {});

    return (
        <div className="servicesPage">
            <h1 className="servicesTitle">Our Services</h1>
            <p className="servicesSubtitle">
                Discover our curated menu of premium treatments designed to elevate your everyday well-being and style.
            </p>

            <div className="servicesCategories">
                {Object.keys(groupedServices).map(categoryName => (
                    <div key={categoryName} className="servicesCategory">
                        <h2 className="servicesCategoryTitle">{categoryName}</h2>
                        <div className="servicesGrid">
                            {(expandedCategories[categoryName]
                              ? groupedServices[categoryName]
                              : groupedServices[categoryName].slice(0, visibleCount)
                            ).map((srv) => (
                                <ServiceCard
                                    key={srv.id}
                                    id={srv.id}
                                    name={srv.name}
                                    description={srv.description}
                                    price={srv.price}
                                    duration={srv.durationMinutes}
                                    category={srv.category?.name || 'Service'}
                                    imageUrl={srv.imageUrl}
                                />
                            ))}
                        </div>
                        {groupedServices[categoryName].length > visibleCount && (
                            <button
                                type="button"
                                className="servicesMoreButton"
                                onClick={() =>
                                    setExpandedCategories((prev) => ({
                                        ...prev,
                                        [categoryName]: !prev[categoryName]
                                    }))
                                }
                            >
                                <span>
                                    {expandedCategories[categoryName]
                                        ? 'Show fewer services'
                                        : `Show more services (${groupedServices[categoryName].length - visibleCount})`}
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`servicesMoreIcon${expandedCategories[categoryName] ? ' servicesMoreIconOpen' : ''}`}
                                />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesMenu;
