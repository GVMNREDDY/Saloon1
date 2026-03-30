import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, Scissors, XCircle, Star } from 'lucide-react';

const UserDashboard = () => {
    const { t } = useTranslation();
    const [appointments, setAppointments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:8080/api/appointments/me', {
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

    const cancelBooking = async (id: number) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:8080/api/appointments/${id}/cancel`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: 'CANCELLED' } : a));
        } catch (err) {
            alert('Failed to cancel');
        }
    };

    const handlePayment = async (id: number) => {
        alert("Initiating secure payment via Razorpay Mock Gateway...");
        try {
            const token = localStorage.getItem('token');
            await axios.post(`http://localhost:8080/api/appointments/${id}/pay`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("Payment Successful! Your booking is now CONFIRMED.");
            setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: 'CONFIRMED' } : a));
        } catch (err) {
            alert('Payment simulation failed');
        }
    };

    return (
        <div className="py-12 px-4 max-w-5xl mx-auto min-h-[80vh]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold dark:text-white">{t('navbar.dashboard')}</h1>
                <div className="bg-accent/20 border border-accent rounded-xl px-6 py-3 flex items-center gap-3 shadow-sm">
                    <div className="bg-accent rounded-full p-2"><Star className="w-5 h-5 text-background-dark" /></div>
                    <div>
                        <div className="text-sm font-bold text-accent">Loyalty Points</div>
                        <div className="text-2xl font-extrabold dark:text-white">450</div>
                    </div>
                </div>
            </div>
            
            {loading ? (
                <div className="text-accent animate-pulse">Loading...</div>
            ) : appointments.length === 0 ? (
                <div className="text-gray-500 dark:text-gray-400">No appointments found.</div>
            ) : (
                <div className="space-y-6">
                    {appointments.map(appt => (
                        <div key={appt.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between md:items-center gap-4">
                            <div>
                                <h3 className="text-xl font-bold dark:text-white mb-2 flex items-center">
                                    <Scissors className="w-5 h-5 mr-2 text-accent" />
                                    {appt.service.name}
                                </h3>
                                <div className="text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-1">
                                    <div className="flex items-center"><Calendar className="w-4 h-4 mr-2"/> {new Date(appt.appointmentDate).toDateString()}</div>
                                    <div className="flex items-center"><Clock className="w-4 h-4 mr-2"/> {appt.timeSlot}</div>
                                </div>
                            </div>
                            
                            <div className="flex md:flex-col items-center justify-between gap-4 md:items-end">
                                <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider
                                    ${appt.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : ''}
                                    ${appt.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : ''}
                                    ${appt.status === 'CANCELLED' ? 'bg-red-100 text-red-800' : ''}
                                `}>
                                    {appt.status}
                                </span>
                                
                                <div className="text-lg font-bold text-accent">${appt.finalPrice?.toFixed(2) || appt.service.price?.toFixed(2)}</div>
                                
                                {appt.status === 'PENDING' && (
                                    <button onClick={() => handlePayment(appt.id)} className="bg-accent text-background-dark font-bold px-4 py-1 rounded-full text-sm shadow hover:-translate-y-0.5 transition-transform">
                                        Pay Now (Razorpay)
                                    </button>
                                )}
                                
                                {appt.status !== 'CANCELLED' && appt.status !== 'COMPLETED' && (
                                    <button onClick={() => cancelBooking(appt.id)} className="text-red-500 hover:text-red-700 font-semibold text-sm flex items-center">
                                        <XCircle className="w-4 h-4 mr-1"/> {t('booking.cancel')}
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
