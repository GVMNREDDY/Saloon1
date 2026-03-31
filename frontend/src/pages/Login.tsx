import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.scss';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data));
      window.location.href = '/';
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const message =
          (err.response?.data as { message?: string } | undefined)?.message;
        setError(message || 'Login failed');
        return;
      }
      setError('Login failed');
    }
  };

  return (
    <div className="authPage">
      <div className="authCard">
        <h2 className="authTitle">Welcome Back</h2>
        {error && <div className="authError">{error}</div>}
        <form onSubmit={handleSubmit} className="authForm">
          <div className="authField">
            <label className="authLabel">Username</label>
          <input
            type="text"
            className="authInput"
            value={formData.username}
            onChange={e => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </div>
        <div className="authField">
          <label className="authLabel">Password</label>
          <input
            type="password"
            className="authInput"
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <button className="authButton" type="submit">
          Sign In
        </button>
        <p className="authFooter">
          Don't have an account?{' '}
          <Link to="/register" className="authLink">
            Sign up
          </Link>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Login;
