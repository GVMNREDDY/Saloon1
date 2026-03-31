import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.scss';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', formData);
      navigate('/login');
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const message =
          (err.response?.data as { message?: string } | undefined)?.message;
        setError(message || 'Registration failed');
        return;
      }
      setError('Registration failed');
    }
  };

  return (
    <div className="authPage">
      <div className="authCard">
        <h2 className="authTitle">Create Account</h2>
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
          <label className="authLabel">Email</label>
          <input
            type="email"
            className="authInput"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
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
            Register
          </button>
        </form>
        <p className="authFooter">
          Already have an account?{' '}
          <Link to="/login" className="authLink">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
