

import { useState } from 'react';
import api from '../api/axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { User } from '../types';
import Layout from '../components/Layout';
import toast from 'react-hot-toast';

export default function Login() {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  // Get previous location or default to /dashboard
  const from = (location.state as { from?: Location })?.from?.pathname || '/dashboard';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', user);
      login(res.data.token);
       toast.success('Logged in successfully!');
      navigate(from, { replace: true }); //  Redirect to previous page
    } catch (err) {
       toast.error('Login failed. Please check credentials.');
      console.error(err);
    }
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
    </Layout>
  );
}
