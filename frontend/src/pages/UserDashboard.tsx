import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, Scissors, XCircle, Star } from 'lucide-react';
import './UserDashboard.scss';

type AppointmentService = {
  name: string;
  price: number;
};

type Appointment = {
  id: number;
  status: string;
  service: AppointmentService;
  finalPrice?: number;
  appointmentDate: string;
  timeSlot: string;
};

const UserDashboard = () => {
    const { t } = useTranslation();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('/api/appointments/me', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setAppointments(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchAppointments();
    }, []);

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'PENDING':
                return 'statusBadgePending';
            case 'CONFIRMED':
                return 'statusBadgeConfirmed';
            case 'CANCELLED':
                return 'statusBadgeCancelled';
            default:
                return 'statusBadgeNeutral';
        }
    };

    const cancelBooking = async (id: number) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`/api/appointments/${id}/cancel`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: 'CANCELLED' } : a));
        } catch {
            alert('Failed to cancel');
        }
    };

    const handlePayment = async (id: number) => {
        alert("Initiating secure payment via Razorpay Mock Gateway...");
        try {
            const token = localStorage.getItem('token');
            await axios.post(`/api/appointments/${id}/pay`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("Payment Successful! Your booking is now CONFIRMED.");
            setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: 'CONFIRMED' } : a));
        } catch {
            alert('Payment simulation failed');
        }
    };

    return (
        <div className="dashboardPage">
            <div className="dashboardHeader">
                <h1 className="dashboardTitle">{t('navbar.dashboard')}</h1>
                <div className="loyaltyCard">
                    <div className="loyaltyIconWrap">
                        <Star className="loyaltyIcon" />
                    </div>
                    <div className="loyaltyText">
                        <div className="loyaltyLabel">Loyalty Points</div>
                        <div className="loyaltyValue">450</div>
                    </div>
                </div>
            </div>
            
            {loading ? (
                <div className="dashboardLoading">Loading...</div>
            ) : appointments.length === 0 ? (
                <div className="dashboardEmpty">No appointments found.</div>
            ) : (
                <div className="appointmentsList">
                    {appointments.map(appt => (
                        <div key={appt.id} className="appointmentCard">
                            <div className="appointmentMain">
                                <h3 className="appointmentServiceTitle">
                                    <Scissors className="appointmentServiceIcon" />
                                    {appt.service.name}
                                </h3>
                                <div className="appointmentMeta">
                                    <div className="appointmentMetaRow">
                                        <Calendar className="appointmentMetaIcon" /> {new Date(appt.appointmentDate).toDateString()}
                                    </div>
                                    <div className="appointmentMetaRow">
                                        <Clock className="appointmentMetaIcon" /> {appt.timeSlot}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="appointmentActions">
                                <span className={`statusBadge ${getStatusBadgeClass(appt.status)}`}>{appt.status}</span>
                                <div className="appointmentPrice">
                                    ${appt.finalPrice?.toFixed(2) || appt.service.price?.toFixed(2)}
                                </div>
                                
                                {appt.status === 'PENDING' && (
                                    <button onClick={() => handlePayment(appt.id)} className="payButton">
                                        Pay Now (Razorpay)
                                    </button>
                                )}
                                
                                {appt.status !== 'CANCELLED' && appt.status !== 'COMPLETED' && (
                                    <button onClick={() => cancelBooking(appt.id)} className="cancelButton">
                                        <XCircle className="cancelButtonIcon" /> {t('booking.cancel')}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserDashboard;
