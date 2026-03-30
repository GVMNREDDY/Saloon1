import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/auth/register', formData);
      navigate('/login');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
      {error && <div className="bg-red-500/10 text-red-500 p-3 rounded-lg mb-4 text-sm">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Username</label>
          <input 
            type="text" 
            className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-accent focus:bg-white dark:focus:bg-gray-900 focus:ring-1 focus:ring-accent outline-none transition-all"
            value={formData.username}
            onChange={e => setFormData({...formData, username: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Email</label>
          <input 
            type="email" 
            className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-accent focus:bg-white dark:focus:bg-gray-900 focus:ring-1 focus:ring-accent outline-none transition-all"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Password</label>
          <input 
            type="password" 
            className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-accent focus:bg-white dark:focus:bg-gray-900 focus:ring-1 focus:ring-accent outline-none transition-all"
            value={formData.password}
            onChange={e => setFormData({...formData, password: e.target.value})}
            required
          />
        </div>
        <button className="w-full bg-accent text-background-dark font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all mt-4">
          Register
        </button>
      </form>
      <p className="mt-6 text-center text-sm dark:text-gray-400">
        Already have an account? <Link to="/login" className="text-accent hover:underline">Sign in</Link>
      </p>
    </div>
  );
};

export default Register;
