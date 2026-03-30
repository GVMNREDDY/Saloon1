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
            { id: 1, name: "Signature Haircut", description: "Precision cut tailored to your face shape by our senior stylists. Wash and style included.", price: 65, durationMinutes: 45, category: { name: "Hair" }, imageUrl: "http://localhost:5173/modern_salon_station.png" },
            { id: 2, name: "Deep Tissue Massage", description: "Relieve tension and soothe muscles with our luxurious 60-minute deep tissue therapy.", price: 120, durationMinutes: 60, category: { name: "Spa" }, imageUrl: "http://localhost:5173/luxury_spa_room.png" }
        ]);
    };

    if (loading) {
        return <div className="text-center py-20 text-accent text-xl">Loading premium services...</div>;
    }

    return (
        <div className="py-12">
            <h1 className="text-4xl font-bold mb-4 text-center">Our Services</h1>
            <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-16">
                Discover our curated menu of premium treatments designed to elevate your everyday well-being and style.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map(srv => (
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
    );
};

export default ServicesMenu;
