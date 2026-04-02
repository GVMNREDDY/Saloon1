import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import ServicesMenu from './pages/ServicesMenu';
import UserDashboard from './pages/UserDashboard';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import Blog from './pages/Blog';
import './App.scss';

const Home = () => {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('isVisible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));

    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
    let raf = 0;

    const updateParallax = () => {
      raf = 0;
      const viewportMid = window.scrollY + window.innerHeight * 0.55;
      parallaxItems.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elMid = rect.top + window.scrollY + rect.height * 0.5;
        const delta = viewportMid - elMid;
        const strength = Number(el.dataset.parallax ?? '0.06');
        const y = Math.max(-36, Math.min(36, delta * strength));
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateParallax();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const reviews = [
    { name: "Emily Clark", rating: 5, text: "Absolutely wonderful! The stylists here are true artists. My hair color has never looked so vibrant and healthy.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" },
    { name: "Jessica R.", rating: 5, text: "The deep tissue massage here completely removed my highly stressed knots. The spa vibe is incredibly relaxing.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" },
    { name: "Aaranya T.", rating: 4, text: "Got my bridal makeup done here and everyone complimented me all day! Highly recommend.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" }
  ];

  const categories = [
    { title: 'Hair Recovery', text: 'Repairing rituals for dry and damaged strands.' },
    { title: 'Curly & Definition', text: 'Hydrating care for healthy and bouncy curls.' },
    { title: 'Scalp Care', text: 'Deep cleanse and nourish for long-term hair health.' },
    { title: 'Color Protection', text: 'Shine-retaining formulas for treated hair.' }
  ];

  const featuredKits = [
    { name: 'Brazilian Curly Kit', price: '$100', tag: 'Top Seller' },
    { name: 'Versaty Pro Recovery', price: '$129', tag: 'Salon Pick' },
    { name: 'Argan Biorestore Set', price: '$120', tag: 'Best Value' }
  ];

  const highlights = [
    { value: '8+', label: 'Years of trusted service' },
    { value: '15k+', label: 'Happy customer sessions' },
    { value: '30+', label: 'Premium treatments available' },
    { value: '4.9', label: 'Average customer rating' }
  ];

  const showcase = [
    {
      title: 'Precision Haircuts',
      text: 'Tailored shapes with clean lines and soft movement.',
      img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600'
    },
    {
      title: 'Glow Facials',
      text: 'Deep cleanse, hydration, and a calm reset for your skin.',
      img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1600'
    },
    {
      title: 'Bridal Makeup',
      text: 'Long-wear artistry with luminous, photo-ready finish.',
      img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1600'
    },
    {
      title: 'Spa Massage',
      text: 'Release tension and restore balance with expert therapy.',
      img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1600'
    }
  ];

  return (
    <>
      <section className="homeHero revealItem" data-reveal>
        <span className="heroBadge">Luxury care, everyday confidence</span>
        <h1 className="homeHeroTitle">Elevate Your Style</h1>
        <p className="homeHeroText">
          Premium salon and spa experiences inspired by modern beauty collections. Book your appointment and glow with confidence.
        </p>
        <div className="homeHeroActions">
          <Link to="/services" className="homeHeroPrimaryButton">
            Book Now
          </Link>
          {!localStorage.getItem('token') && (
            <Link to="/login" className="homeHeroSecondaryButton">
              Sign In
            </Link>
          )}
        </div>
      </section>

      <section className="signatureSection revealItem" data-reveal>
        <div className="signatureGrid">
          <div className="signatureCopy">
            <span className="softKicker">Signature experiences</span>
            <h2>Premium care in a calm, luxury space</h2>
            <p>
              From consultation to finishing touches, every detail is curated: hygiene-first tools, gentle products,
              and an elegant atmosphere that feels like a reset.
            </p>
            <div className="signatureActions">
              <Link to="/services" className="homeHeroPrimaryButton">Explore Services</Link>
              <Link to="/contact" className="homeHeroSecondaryButton">Talk to Us</Link>
            </div>
          </div>

          <div className="signatureMedia smokeFrame" aria-hidden="true">
            <div className="smokeFrameInner">
              <img
                data-parallax="0.07"
                className="signatureImage parallaxLayer"
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1800"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="statsSection revealItem" data-reveal>
        <div className="statsGrid">
          {highlights.map((item) => (
            <div key={item.label} className="statCard">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lookbookSection revealItem" data-reveal>
        <div className="sectionHeading">
          <h2>Lookbook</h2>
          <p>Large-scale visuals with smooth motion and elegant finishing.</p>
        </div>
        <div className="lookbookRail">
          {showcase.map((item) => (
            <article key={item.title} className="lookbookCard smokeFrame">
              <div className="smokeFrameInner">
                <img
                  className="lookbookImage"
                  data-parallax="0.05"
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className="lookbookMeta">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="collectionSection revealItem" data-reveal>
        <div className="sectionHeading">
          <h2>Shop by Treatment Collections</h2>
          <p>Explore curated categories designed for every hair and skin need.</p>
        </div>
        <div className="collectionGrid">
          {categories.map((category) => (
            <article key={category.title} className="collectionCard">
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kitsSection revealItem" data-reveal>
        <div className="sectionHeading">
          <h2>Featured Home-Care Kits</h2>
          <p>Bring salon-grade care into your daily routine with professional kits.</p>
        </div>
        <div className="kitsGrid">
          {featuredKits.map((kit) => (
            <article key={kit.name} className="kitCard">
              <span className="kitTag">{kit.tag}</span>
              <h3>{kit.name}</h3>
              <p className="kitPrice">{kit.price}</p>
              <Link to="/services" className="kitButton">
                Explore
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="ctaBand revealItem" data-reveal>
        <div className="ctaBandInner">
          <div>
            <h2>Ready for your glow-up?</h2>
            <p>Book a slot in seconds and let our team take care of the rest.</p>
          </div>
          <div className="ctaBandActions">
            <Link to="/services" className="homeHeroPrimaryButton">Book Appointment</Link>
            {!localStorage.getItem('token') && (
              <Link to="/register" className="homeHeroSecondaryButton">Create Account</Link>
            )}
          </div>
        </div>
      </section>

      <section className="reviewsSection revealItem" data-reveal>
        <h2 className="reviewsTitle">What Our Customers Say</h2>
        <div className="reviewsGrid">
          {reviews.map((review, i) => (
            <div key={i} className="reviewCard">
              <img src={review.img} className="reviewAvatar" alt={review.name} />
              <div className="reviewStars">
                 {[...Array(review.rating)].map((_, j) => <svg key={j} className="reviewStarIcon" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
              </div>
              <p className="reviewText">"{review.text}"</p>
              <h4 className="reviewName">- {review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="insightsSection revealItem" data-reveal>
        <div className="sectionHeading">
          <h2>Latest Beauty Insights</h2>
          <p>Weekly salon tips on smoothness, hydration, and long-lasting shine.</p>
        </div>
        <div className="insightsGrid">
          <article className="insightCard">
            <h3>Keratin Rituals for Frizz Control</h3>
            <p>Learn how to keep your hair sleek and manageable after treatment.</p>
          </article>
          <article className="insightCard">
            <h3>Why Argan Oil Works Wonders</h3>
            <p>Discover the benefits of argan-based nourishment for dry hair.</p>
          </article>
          <article className="insightCard">
            <h3>Simple Salon Care at Home</h3>
            <p>Small weekly routines that keep your hair healthy between visits.</p>
          </article>
        </div>
      </section>

      <section className="newsletterSection revealItem" data-reveal>
        <div className="newsletterCard">
          <h2>Subscribe for Offers & Beauty Tips</h2>
          <p>Get exclusive discounts and updates on our newest treatments.</p>
          <form className="newsletterForm" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  const token = localStorage.getItem('token');

  return (
    <footer className="siteFooter">
      <div className="siteFooterTop">
        <div className="siteFooterGrid">
          <div className="footerBrand">
            <h3>Saloon</h3>
            <p>
              Premium salon and spa services with modern care rituals for hair, skin, and wellness.
            </p>
            <div className="footerContactMini">
              <a className="footerLink" href="mailto:support@saloon.com">support@saloon.com</a>
              <a className="footerLink" href="tel:+15551234567">+1 (555) 123-4567</a>
            </div>
          </div>

          <div className="footerColumn">
            <h4>Navigation</h4>
            <div className="footerLinks">
              <Link className="footerLink" to="/">Home</Link>
              <Link className="footerLink" to="/services">Services</Link>
              <Link className="footerLink" to="/about">About</Link>
              <Link className="footerLink" to="/gallery">Gallery</Link>
              <Link className="footerLink" to="/pricing">Pricing</Link>
              <Link className="footerLink" to="/offers">Offers</Link>
              <Link className="footerLink" to="/blog">Blog</Link>
              <Link className="footerLink" to="/contact">Contact</Link>
              {token ? (
                <Link className="footerLink" to="/dashboard">Dashboard</Link>
              ) : (
                <>
                  <Link className="footerLink" to="/login">Login</Link>
                  <Link className="footerLink" to="/register">Register</Link>
                </>
              )}
            </div>
          </div>

          <div className="footerColumn">
            <h4>Contact Details</h4>
            <p className="footerTextStrong">Visit us</p>
            <p className="footerText">
              123 Salon Street, Downtown<br />
              City, State 00000
            </p>
            <p className="footerTextStrong">Working hours</p>
            <p className="footerText">Mon-Sat: 9:00 AM - 8:00 PM</p>
            <p className="footerText">Sun: 10:00 AM - 6:00 PM</p>
          </div>

          <div className="footerColumn">
            <h4>Location</h4>
            <div className="footerMapWrap smokeFrame">
              <div className="smokeFrameInner footerMapInner">
                <iframe
                  className="footerMap"
                  title="Salon location map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=salon%20near%20me&output=embed"
                />
              </div>
            </div>

            <h4 className="footerFollowTitle">Follow Us</h4>
            <div className="footerLinks footerLinksRow">
              <a className="footerLink" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a className="footerLink" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              <a className="footerLink" href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
        </div>
      </div>

      <div className="siteFooterBottom">
        <p className="footerBottom">
          © {year} Saloon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

function App() {
  const [darkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="appRoot">
        <Navbar />
        <main className="appMain">
          <React.Suspense fallback={<div className="suspenseFallback">Loading Salon Experience...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/services" element={<ServicesMenu />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="whatsAppButton">
            <svg className="whatsAppIcon" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </a>
      </div>
    </Router>
  );
}

export default App;
