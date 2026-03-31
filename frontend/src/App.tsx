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

const Home = () => {
  const reviews = [
    { name: "Emily Clark", rating: 5, text: "Absolutely wonderful! The stylists here are true artists. My hair color has never looked so vibrant and healthy.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" },
    { name: "Jessica R.", rating: 5, text: "The deep tissue massage here completely removed my highly stressed knots. The spa vibe is incredibly relaxing.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" },
    { name: "Aaranya T.", rating: 4, text: "Got my bridal makeup done here and everyone complimented me all day! Highly recommend.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" }
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-5xl font-bold mb-6 text-accent">Elevate Your Style</h1>
        <p className="text-xl max-w-2xl text-text-darkMuted dark:text-gray-300">
          Experience the ultimate care and attention. Book an appointment today and discover our world-class salon services crafted just for you.
        </p>
        <div className="mt-8 flex gap-4">
          <Link to="/services" className="bg-accent text-background-dark font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-accent/30">
            Book Now
          </Link>
          {!localStorage.getItem('token') && (
            <Link to="/login" className="border-2 border-accent text-accent font-semibold py-3 px-8 rounded-full hover:bg-accent hover:text-background-dark transition-all">
              Sign In
            </Link>
          )}
        </div>
      </div>

      <div className="py-20">
        <h2 className="text-4xl font-extrabold text-center mb-16 dark:text-white">What Our Customers Say</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
              <img src={review.img} className="w-20 h-20 rounded-full object-cover mb-4 shadow" alt={review.name} />
              <div className="flex text-yellow-500 mb-4">
                 {[...Array(review.rating)].map((_, j) => <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{review.text}"</p>
              <h4 className="font-bold dark:text-white text-lg">- {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
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
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <React.Suspense fallback={<div className="text-center font-bold text-xl py-20 text-accent animate-pulse">Loading Salon Experience...</div>}>
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
        
        {/* Floating WhatsApp Button */}
        <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:-translate-y-1 transition-all z-50 flex items-center justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </a>
      </div>
    </Router>
  );
}

export default App;
