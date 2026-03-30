import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Sun, Moon, LogIn } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-background dark:bg-background-dark/95 sticky top-0 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-accent font-bold text-2xl tracking-tighter">
          <Scissors className="w-8 h-8" />
          <span>LuxeSalon</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/services" className="font-medium hover:text-accent transition-colors">Services</Link>
          <Link to="/book" className="font-medium hover:text-accent transition-colors">Book</Link>
          
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>

          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-accent" />}
          </button>
          
          <Link to="/login" className="flex items-center gap-2 bg-accent/10 text-accent font-medium py-2 px-4 rounded-full hover:bg-accent/20 transition-colors">
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
