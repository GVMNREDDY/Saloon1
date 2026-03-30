import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Heart, Star } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();
    
    const team = [
        { name: "Sarah Jenkins", role: "Master Hair Colorist", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400", bio: "10+ years experience specializing in balayage and vibrant color correction." },
        { name: "David Chen", role: "Senior Stylist", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=400", bio: "Award-winning stylist known for precision styling trends." },
        { name: "Elena Rodriguez", role: "Skin & Spa Specialist", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6ece?auto=format&fit=crop&q=80&w=400", bio: "Bringing rejuvenation and glow to every client through holistic facials." }
    ];

    return (
        <div className="bg-white dark:bg-background-dark py-16 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 dark:text-white">Our Story & Vision</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Founded on the belief that beauty is an intricate blend of art and personal expression, our salon has been transforming looks and lifting spirits since its inception. 
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-700 dark:text-gray-300">
                                <ShieldCheck className="w-6 h-6 text-accent mr-3" /> State-of-the-art Hygiene & Safety
                            </li>
                            <li className="flex items-center text-gray-700 dark:text-gray-300">
                                <Heart className="w-6 h-6 text-accent mr-3" /> Cruelty-Free & Sustainable Products
                            </li>
                            <li className="flex items-center text-gray-700 dark:text-gray-300">
                                <Star className="w-6 h-6 text-accent mr-3" /> 5-Star Unmatched Expertise
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" alt="Salon Interior" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Team Section */}
                <h2 className="text-4xl font-extrabold text-center mb-12 dark:text-white">Meet Our Experts</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((stylist, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg group">
                            <div className="h-64 overflow-hidden relative">
                                <img src={stylist.image} alt={stylist.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{stylist.name}</h3>
                                        <p className="text-accent font-semibold">{stylist.role}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 dark:text-gray-400">{stylist.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
