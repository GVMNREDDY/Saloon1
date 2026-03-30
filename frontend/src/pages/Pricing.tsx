import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Sparkles, Star } from 'lucide-react';

const Pricing = () => {
    const { t } = useTranslation();

    const packages = [
        {
            title: "Silver Membership",
            price: "$49/mo",
            features: ["1 Free Haircut per month", "10% off all retail products", "Priority booking", "Free styling consultation"],
            recommended: false
        },
        {
            title: "Gold VIP Membership",
            price: "$99/mo",
            features: ["Unlimited Haircuts", "1 Free 60-min Spa a month", "20% off all retail products", "Complimentary beverages"],
            recommended: true
        },
        {
            title: "Bridal Combo",
            price: "$399",
            features: ["Full Bridal Makeup", "Pre-bridal facial & cleanup", "Hair styling & draping", "Trial session included"],
            recommended: false
        }
    ];

    return (
        <div className="py-16 px-4 bg-gray-50 dark:bg-background-dark min-h-screen">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 dark:text-white">Pricing & Packages</h1>
            
            <div className="bg-accent/10 border-2 border-accent text-accent max-w-2xl mx-auto rounded-xl p-4 text-center mb-16 shadow-sm">
                <span className="font-bold flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5"/> Seasonal Discount: Use code WELCOME10 for 10% off your first booking! <Sparkles className="w-5 h-5"/>
                </span>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
                {packages.map((pkg, i) => (
                    <div key={i} className={`bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl relative transition-transform hover:-translate-y-2 border-2 ${pkg.recommended ? 'border-accent' : 'border-transparent dark:border-gray-800'}`}>
                        {pkg.recommended && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-background-dark px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase flex items-center gap-1">
                                <Star className="w-4 h-4" /> Most Popular
                            </div>
                        )}
                        <h3 className="text-2xl font-bold dark:text-white mb-2">{pkg.title}</h3>
                        <div className="text-4xl font-extrabold text-accent mb-6">{pkg.price}</div>
                        <ul className="space-y-4 mb-8">
                            {pkg.features.map((feature, j) => (
                                <li key={j} className="flex items-start text-gray-600 dark:text-gray-400">
                                    <CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="/services" className={`block text-center w-full py-3 rounded-full font-bold transition-all ${pkg.recommended ? 'bg-accent text-background-dark hover:bg-opacity-90' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                            Choose Plan
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
