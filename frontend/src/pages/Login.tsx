import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data));
      window.location.href = '/';
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>
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
          Sign In
        </button>
      </form>
      <p className="mt-6 text-center text-sm dark:text-gray-400">
        Don't have an account? <Link to="/register" className="text-accent hover:underline">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
