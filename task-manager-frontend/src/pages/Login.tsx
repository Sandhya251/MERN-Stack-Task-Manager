import { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { User } from '../types';
import Layout from '../components/Layout';


export default function Login() {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await api.post('/auth/login', user);
    login(res.data.token);
    navigate('/dashboard');
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
