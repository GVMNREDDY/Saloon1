import { useState, useEffect } from 'react';
import axios from 'axios';
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
            { id: 1, name: "Hair Cut", description: "Precision cut and styling.", price: 45, durationMinutes: 30, category: { name: "Hair" }, imageUrl: "../g2.png" },
            { id: 2, name: "Styling", description: "Professional blow-dry and styling.", price: 35, durationMinutes: 45, category: { name: "Hair" }, imageUrl: "../g1.png" },
            { id: 3, name: "Facials", description: "Deep cleansing facial treatment.", price: 80, durationMinutes: 60, category: { name: "Skin" }, imageUrl: "../g5.jpg" },
            { id: 4, name: "Cleanup", description: "Quick skin cleanup and glow.", price: 40, durationMinutes: 30, category: { name: "Skin" }, imageUrl: "../g6.jpg" },
            { id: 5, name: "Bridal Makeup", description: "Complete bridal makeup package.", price: 250, durationMinutes: 180, category: { name: "Makeup" }, imageUrl: "../g8.png" },
            { id: 6, name: "Deep Tissue Massage", description: "Relieve tension and soothe muscles.", price: 120, durationMinutes: 60, category: { name: "Spa & massage" }, imageUrl: "../g9.png" }
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
                            {groupedServices[categoryName].map((srv) => (
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesMenu;
