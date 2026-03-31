import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.scss';

const Navbar = () => {
    const { i18n } = useTranslation();
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
        <nav className="navbar">
            <Link to="/" className="navbarBrand">
                <span className="navbarBrandIcon">✨</span> Saloon
            </Link>

            <div className="navbarLinks">
                <Link to="/services" className="navbarLink">
                    {'Services'}
                </Link>
                <Link to="/about" className="navbarLink navbarHideLg">
                    {'About Us'}
                </Link>
                <Link to="/gallery" className="navbarLink navbarHideLg">
                    {'Gallery'}
                </Link>
                <Link to="/offers" className="navbarLink navbarHideXl">
                    Offers
                </Link>
                <Link to="/blog" className="navbarLink navbarHideXl">
                    Blog
                </Link>
                <Link to="/pricing" className="navbarLink navbarHideMd">
                    Pricing
                </Link>
                <Link to="/contact" className="navbarLink navbarHideMd">
                    Contact Us
                </Link>

                <button onClick={toggleLang} className="navbarLangButton navbarHideMd">
                    {i18n.language === 'en' ? 'తెలుగు' : 'English'}
                </button>

                {token ? (
                    <>
                        <Link to="/dashboard" className="navbarLink">
                            {'Dashboard'}
                        </Link>
                        <button onClick={handleLogout} className="navbarLogoutButton" type="button">
                            {'Logout'}
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="navbarLoginButton">
                        {'Login'}
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
