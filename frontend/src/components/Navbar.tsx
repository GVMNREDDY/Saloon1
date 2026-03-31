import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'te' : 'en');
    };

    return (
        <nav className="p-4 bg-background dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 flex justify-between items-center transition-colors shadow-sm relative z-40">
            <Link to="/" className="text-2xl font-bold tracking-tight text-accent flex items-center gap-2">
                <span className="text-3xl">✨</span> Saloon
            </Link>

            <div className="flex gap-4 md:gap-5 items-center flex-wrap justify-end">
                <Link to="/services" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-accent transition-colors">
                    {'Services'}
                </Link>
                <Link to="/about" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-accent transition-colors hidden lg:block">
                    {'About Us'}
                </Link>
                <Link to="/gallery" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-accent transition-colors hidden lg:block">
                    {'Gallery'}
                </Link>
                <Link to="/offers" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-accent transition-colors hidden xl:block">
                    Offers
                </Link>
                <Link to="/blog" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-accent transition-colors hidden xl:block">
                    Blog
                </Link>
                <Link to="/pricing" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-accent transition-colors hidden md:block">
                    Pricing
                </Link>
                <Link to="/contact" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-accent transition-colors hidden md:block">
                    Contact Us
                </Link>

                <button onClick={toggleLang} className="text-xs font-bold border border-gray-400 px-2 py-1 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hidden md:block">
                    {i18n.language === 'en' ? 'తెలుగు' : 'English'}
                </button>

                {token ? (
                    <>
                        <Link to="/dashboard" className="font-semibold text-gray-700 dark:text-gray-300 hover:text-accent transition-colors">
                            {'Dashboard'}
                        </Link>
                        <button onClick={handleLogout} className="font-semibold text-red-500 hover:text-red-600 transition-colors">
                            {'Logout'}
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="bg-accent text-background-dark px-4 py-2 md:px-5 rounded-full font-bold hover:bg-opacity-90 shadow-sm transition-all shadow-accent/20">
                        {'Login'}
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
