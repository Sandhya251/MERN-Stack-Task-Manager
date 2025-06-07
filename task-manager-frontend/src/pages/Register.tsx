import { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';

export default function Register() {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post('/auth/register', user);
    navigate('/login');
  };

 return (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="Password"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Register
      </button>
    </form>
  </div>
);

}
