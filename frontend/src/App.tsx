import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import ServicesMenu from './pages/ServicesMenu';

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
    <h1 className="text-5xl font-bold mb-6 text-accent">Elevate Your Style</h1>
    <p className="text-xl max-w-2xl text-text-darkMuted dark:text-gray-300">
      Experience the ultimate care and attention. Book an appointment today and discover our world-class salon services crafted just for you.
    </p>
    <div className="mt-8 flex gap-4">
      <Link to="/register" className="bg-accent text-background-dark font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-accent/30">
        Book Now
      </Link>
      <Link to="/login" className="border-2 border-accent text-accent font-semibold py-3 px-8 rounded-full hover:bg-accent hover:text-background-dark transition-all">
        Sign In
      </Link>
    </div>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);

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
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/services" element={<ServicesMenu />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
