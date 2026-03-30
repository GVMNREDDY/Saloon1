import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import BookingModal from './BookingModal';

interface ServiceCardProps {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: number;
    imageUrl?: string;
    category: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, name, description, price, duration, imageUrl, category }) => {
    const { t } = useTranslation();
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 transition-all hover:-translate-y-1 hover:shadow-xl group">
            <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                {imageUrl ? (
                    <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">No Image provided</div>
                )}
                <div className="absolute top-4 right-4 bg-accent text-background-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {category}
                </div>
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold dark:text-white leading-tight">{name}</h3>
                    <span className="text-xl font-bold text-accent">${price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">{description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{duration} min</span>
                    </div>
                    <button 
                        onClick={() => setIsBookingOpen(true)}
                        className="text-background-dark dark:text-background-dark bg-white dark:bg-gray-200 font-semibold py-2 px-6 rounded-full border-2 border-transparent hover:border-accent hover:bg-accent hover:text-background-dark transition-all text-sm shadow-sm"
                    >
                        {t('services.bookNow')}
                    </button>
                </div>
            </div>
            <BookingModal serviceId={id} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
};

export default ServiceCard;
