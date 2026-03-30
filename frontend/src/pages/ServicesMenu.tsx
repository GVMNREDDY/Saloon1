import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceCard from '../components/ServiceCard';

const ServicesMenu = () => {
    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                // First attempt backend
                const res = await axios.get('http://localhost:8080/api/services');
                if (res.data.length > 0) {
                     setServices(res.data);
                } else {
                     useMockData();
                }
            } catch (error) {
                console.error("Backend not running or error, using mock data", error);
                useMockData();
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    const useMockData = () => {
        setServices([
            { id: 1, name: "Hair Cut", description: "Precision cut and styling.", price: 45, durationMinutes: 30, category: { name: "Hair" }, imageUrl: "http://localhost:5173/modern_salon_station.png" },
            { id: 2, name: "Styling", description: "Professional blow-dry and styling.", price: 35, durationMinutes: 45, category: { name: "Hair" } },
            { id: 3, name: "Facials", description: "Deep cleansing facial treatment.", price: 80, durationMinutes: 60, category: { name: "Skin" } },
            { id: 4, name: "Cleanup", description: "Quick skin cleanup and glow.", price: 40, durationMinutes: 30, category: { name: "Skin" } },
            { id: 5, name: "Bridal Makeup", description: "Complete bridal makeup package.", price: 250, durationMinutes: 180, category: { name: "Makeup" } },
            { id: 6, name: "Deep Tissue Massage", description: "Relieve tension and soothe muscles.", price: 120, durationMinutes: 60, category: { name: "Spa & massage" }, imageUrl: "http://localhost:5173/luxury_spa_room.png" }
        ]);
    };

    if (loading) {
        return <div className="text-center py-20 text-accent text-xl animate-pulse">Loading premium services...</div>;
    }

    const groupedServices = services.reduce((acc, current) => {
        const catName = current.category?.name || "Other";
        if (!acc[catName]) acc[catName] = [];
        acc[catName].push(current);
        return acc;
    }, {} as Record<string, any[]>);

    return (
        <div className="py-12 px-4">
            <h1 className="text-4xl font-bold mb-4 text-center dark:text-white">Our Services</h1>
            <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-16">
                Discover our curated menu of premium treatments designed to elevate your everyday well-being and style.
            </p>
            <div className="max-w-7xl mx-auto space-y-16">
                {Object.keys(groupedServices).map(categoryName => (
                    <div key={categoryName}>
                        <h2 className="text-3xl font-extrabold mb-8 text-gray-800 dark:text-white border-b-2 border-accent pb-2 inline-block">
                             {categoryName}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {groupedServices[categoryName].map((srv: any) => (
                                <ServiceCard 
                                    key={srv.id}
                                    id={srv.id}
                                    name={srv.name}
                                    description={srv.description}
                                    price={srv.price}
                                    duration={srv.durationMinutes}
                                    category={srv.category?.name || "Service"}
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
