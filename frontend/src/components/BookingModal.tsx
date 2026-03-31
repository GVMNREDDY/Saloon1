import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import './BookingModal.scss';

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
            const res = await axios.post('/api/appointments/book', {
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
        } catch (error: unknown) {
            const message =
              axios.isAxiosError(error)
                ? (error.response?.data as { message?: string } | undefined)?.message
                : undefined;
            setStatusMsg(message || 'Error booking appointment');
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="bookingModalOverlay" onClick={onClose} role="presentation">
            <div
                className="bookingModal"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                <button onClick={onClose} className="bookingModalCloseButton" type="button">
                    <X size={22} />
                </button>
                <h2 className="bookingModalTitle">{t('booking.modalTitle')}</h2>
                
                {statusMsg && <div className="bookingModalStatus">{statusMsg}</div>}

                <form onSubmit={handleBook} className="bookingModalForm">
                    <div className="bookingModalField">
                        <label className="bookingModalLabel">{t('booking.preferredDate')}</label>
                        <input
                          type="date"
                          required
                          className="bookingModalInput"
                          value={date}
                          onChange={e => setDate(e.target.value)}
                        />
                    </div>
                    
                    <div className="bookingModalField">
                        <label className="bookingModalLabel">{t('booking.timeSlot')}</label>
                        <select
                          required
                          className="bookingModalInput"
                          value={timeSlot}
                          onChange={e => setTimeSlot(e.target.value)}
                        >
                            {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                        </select>
                    </div>

                    <div className="bookingModalField">
                        <label className="bookingModalLabel">{t('booking.stylist')}</label>
                        <input
                          type="text"
                          className="bookingModalInput"
                          placeholder="Name (Optional)"
                          value={stylist}
                          onChange={e => setStylist(e.target.value)}
                        />
                    </div>

                    <div className="bookingModalField">
                        <label className="bookingModalLabel">{t('booking.coupon')}</label>
                        <input
                          type="text"
                          className="bookingModalInput"
                          placeholder="WELCOME10"
                          value={coupon}
                          onChange={e => setCoupon(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="bookingModalButton">
                        {t('booking.confirm')}
                    </button>
                </form>
            </div>
        </div>,
        document.body
    );
};

export default BookingModal;
