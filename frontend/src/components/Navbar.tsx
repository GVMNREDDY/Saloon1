import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import './Navbar.scss';

const Navbar = () => {
    const { i18n } = useTranslation();
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsMenuOpen(false);
        navigate('/login');
    };

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'te' : 'en');
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbarBrand">
                <span className="navbarBrandIcon">✨</span> Saloon
            </Link>

            <button
                className="navbarMenuButton"
                type="button"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                aria-controls="navbar-links"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div
                id="navbar-links"
                key={location.pathname}
                className={`navbarLinks${isMenuOpen ? ' navbarLinksOpen' : ''}`}
            >
                <Link to="/services" className="navbarLink" onClick={closeMenu}>
                    {'Services'}
                </Link>
                <Link to="/about" className="navbarLink navbarHideLg" onClick={closeMenu}>
                    {'About Us'}
                </Link>
                <Link to="/gallery" className="navbarLink navbarHideLg" onClick={closeMenu}>
                    {'Gallery'}
                </Link>
                <Link to="/offers" className="navbarLink navbarHideXl" onClick={closeMenu}>
                    Offers
                </Link>
                <Link to="/blog" className="navbarLink navbarHideXl" onClick={closeMenu}>
                    Blog
                </Link>
                <Link to="/pricing" className="navbarLink navbarHideMd" onClick={closeMenu}>
                    Pricing
                </Link>
                <Link to="/contact" className="navbarLink navbarHideMd" onClick={closeMenu}>
                    Contact Us
                </Link>

                <button onClick={toggleLang} className="navbarLangButton navbarHideMd" type="button">
                    {i18n.language === 'en' ? 'తెలుగు' : 'English'}
                </button>

                {token ? (
                    <>
                        <Link to="/dashboard" className="navbarLink" onClick={closeMenu}>
                            {'Dashboard'}
                        </Link>
                        <button onClick={handleLogout} className="navbarLogoutButton" type="button">
                            {'Logout'}
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="navbarLoginButton" onClick={closeMenu}>
                        {'Login'}
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
