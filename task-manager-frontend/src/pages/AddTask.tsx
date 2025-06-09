
import { useState } from 'react';
import api from '../api/axios';
import { Task } from '../types';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import toast from 'react-hot-toast';

export default function AddTask() {
  const [task, setTask] = useState<Task>({ title: '', description: '', completed: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
      try {
    await api.post('/tasks', task);
    toast.success('Task created successfully!');
    navigate('/dashboard');
  } catch (err: any) {
    const message = err.response?.data?.message || 'Failed to create task';
    setError(message);
    toast.error(message);
  } finally {
    setLoading(false);
  }
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 text black">Add New Task</h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black "
          required
          disabled={loading}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black "
          required
          disabled={loading}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Create Task'}
        </button>

        {error && <p className="text-red-600 text-center">{error}</p>}
      </form>
    </Layout>
  );
}
