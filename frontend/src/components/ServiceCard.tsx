import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BookingModal from './BookingModal';
import './ServiceCard.scss';

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
    const navigate = useNavigate();
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    return (
        <div className="serviceCard">
            <div className="serviceCardImageArea">
                {imageUrl ? (
                    <img src={imageUrl} alt={name} className="serviceCardImage" />
                ) : (
                    <div className="serviceCardImagePlaceholder">No Image provided</div>
                )}
                <div className="serviceCardBadge">
                    {category}
                </div>
            </div>
            <div className="serviceCardBody">
                <div className="serviceCardTopRow">
                    <h3 className="serviceCardTitle">{name}</h3>
                    <span className="serviceCardPrice">${price.toFixed(2)}</span>
                </div>
                <p className="serviceCardDescription">{description}</p>
                <div className="serviceCardFooter">
                    <div className="serviceCardDuration">
                        <Clock className="serviceCardDurationIcon" />
                        <span>{duration} min</span>
                    </div>
                    <button
                        onClick={() => {
                            if (!localStorage.getItem('token')) {
                                navigate('/login');
                            } else {
                                setIsBookingOpen(true);
                            }
                        }}
                        className="serviceCardButton"
                    >
                        {'Book Now'}
                    </button>
                </div>
            </div>
            <BookingModal serviceId={id} isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
};

export default ServiceCard;
