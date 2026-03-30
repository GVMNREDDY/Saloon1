import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-16 px-4 bg-white dark:bg-background-dark min-h-screen">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 dark:text-white">Contact & Visit Us</h1>
            
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-10">
                    <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-4 rounded-xl text-accent"><MapPin className="w-8 h-8" /></div>
                        <div>
                            <h3 className="text-2xl font-bold dark:text-white mb-2">Our Location</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">123 Elegance Boulevard, Glamour District<br/>New York, NY 10001</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-4 rounded-xl text-accent"><Clock className="w-8 h-8" /></div>
                        <div>
                            <h3 className="text-2xl font-bold dark:text-white mb-2">Working Hours</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">Mon - Fri: 9:00 AM - 8:00 PM<br/>Saturday: 10:00 AM - 6:00 PM<br/>Sunday: Closed</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-4 rounded-xl text-accent"><Phone className="w-8 h-8" /></div>
                        <div>
                            <h3 className="text-2xl font-bold dark:text-white mb-2">Contact</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">+1 (555) 123-4567</p>
                            <p className="text-gray-600 dark:text-gray-400 text-lg flex items-center gap-2 mt-1">
                                <Mail className="w-5 h-5"/> hello@salonelegance.com
                            </p>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                        <h3 className="text-2xl font-bold dark:text-white mb-6">Connect With Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition-all shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a5 5 0 015 5v11a5 5 0 01-5 5h-11a5 5 0 01-5-5v-11a5 5 0 015-5z"></path></svg>
                            </a>
                            <a href="#" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            </a>
                            <a href="#" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full text-green-500 hover:bg-green-500 hover:text-white transition-all shadow-sm flex items-center font-bold gap-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Google Map Mock Embed */}
                <div className="h-full min-h-[400px] w-full bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl">
                    <iframe 
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1689252327453!5m2!1sen!2sus" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" 
                        title="Salon Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
