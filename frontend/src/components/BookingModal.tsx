import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

interface BookingModalProps {
    serviceId: number;
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ serviceId, isOpen, onClose }) => {
    const { t } = useTranslation();
    const [date, setDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('10:00 AM');
    const [stylist, setStylist] = useState('');
    const [coupon, setCoupon] = useState('');
    const [statusMsg, setStatusMsg] = useState('');

    const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

    const handleBook = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const res = await axios.post('http://localhost:8080/api/appointments/book', {
                serviceId,
                date,
                timeSlot,
                stylist,
                coupon
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setStatusMsg(res.data.message || t('booking.success'));
            setTimeout(() => {
                setStatusMsg('');
                onClose();
            }, 3000);
        } catch (error: any) {
            setStatusMsg(error.response?.data?.message || "Error booking appointment");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl w-full max-w-lg shadow-2xl relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white">
                    <X size={24} />
                </button>
                <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('booking.modalTitle')}</h2>
                
                {statusMsg && <div className="mb-4 text-center font-bold text-accent">{statusMsg}</div>}

                <form onSubmit={handleBook} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-300">{t('booking.preferredDate')}</label>
                        <input type="date" required className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" value={date} onChange={e => setDate(e.target.value)} />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-300">{t('booking.timeSlot')}</label>
                        <select required className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" value={timeSlot} onChange={e => setTimeSlot(e.target.value)}>
                            {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-300">{t('booking.stylist')}</label>
                        <input type="text" className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Name (Optional)" value={stylist} onChange={e => setStylist(e.target.value)} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-gray-300">{t('booking.coupon')}</label>
                        <input type="text" className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="WELCOME10" value={coupon} onChange={e => setCoupon(e.target.value)} />
                    </div>

                    <button type="submit" className="w-full mt-6 bg-accent text-background-dark font-bold py-3 rounded-lg shadow hover:bg-opacity-90 transition-all">
                        {t('booking.confirm')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
