import React from 'react';
import { Gift, Percent, Users } from 'lucide-react';

const Offers = () => {
    return (
        <div className="py-16 px-4 bg-white dark:bg-background-dark min-h-screen">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 dark:text-white">Special Offers & Rewards</h1>
            
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Festival Offer */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/40 dark:to-pink-800/20 p-8 rounded-3xl shadow-lg border border-pink-200 dark:border-pink-800 transition-transform hover:-translate-y-2">
                    <div className="bg-pink-500 text-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md">
                        <Percent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 dark:text-white">Festival Blowout</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">Get a flat 20% off on all Advanced Skin & Hair coloring services this month!</p>
                    <div className="bg-white dark:bg-gray-800 px-4 py-2 inline-block rounded-lg font-mono font-bold text-pink-500 tracking-wider">
                        FESTIVAL20
                    </div>
                </div>

                {/* Referral Program */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/20 p-8 rounded-3xl shadow-lg border border-blue-200 dark:border-blue-800 transition-transform hover:-translate-y-2">
                    <div className="bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md">
                        <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 dark:text-white">Refer & Earn</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">Bring a friend to the salon and you both receive 500 Loyalty Points worth $50.</p>
                    <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition-colors shadow">
                        Get Invite Link
                    </button>
                </div>

                {/* Gift Cards */}
                <div className="bg-gradient-to-br from-accent/20 to-accent/5 dark:from-accent/20 dark:to-transparent p-8 rounded-3xl shadow-lg border border-accent/40 transition-transform hover:-translate-y-2">
                    <div className="bg-accent text-background-dark w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md">
                        <Gift className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 dark:text-white">Digital Gift Cards</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">Treat your loved ones to a luxurious spa day. Custom amounts available instantly.</p>
                    <button className="bg-accent text-background-dark font-bold py-2 px-6 rounded-full hover:bg-opacity-90 shadow-md">
                        Buy Gift Card
                    </button>
                </div>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="mt-20 max-w-4xl mx-auto bg-gray-900 dark:bg-gray-800 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-extrabold text-white mb-4">Want exclusive VIP alerts?</h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">Subscribe to our Push Notifications and Newsletter for flash sales and priority booking access.</p>
                    <form className="flex max-w-md mx-auto gap-2">
                        <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-full border-none focus:ring-2 focus:ring-accent outline-none font-medium" />
                        <button className="bg-accent text-background-dark px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-accent/50 transition-all">
                            Enable
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Offers;
