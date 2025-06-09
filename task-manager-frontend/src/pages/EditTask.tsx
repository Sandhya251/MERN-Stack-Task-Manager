

import { useEffect, useState } from 'react';
import api from '../api/axios';
import { Task } from '../types';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import toast from 'react-hot-toast';

export default function EditTask() {
  const [task, setTask] = useState<Task>({ title: '', description: '', completed: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/tasks/${id}`);
        setTask(res.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to load task');
      } finally {
        setLoading(false);
      }
    };
    fetchTask();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await api.put(`/tasks/${id}`, task);
       toast.success('Task updated successfully!');
      navigate('/dashboard');
    } catch (err: any) {
       toast.error(err.response?.data?.message || 'Failed to update task');
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
        <h2 className="text-2xl font-semibold text-center text-black-700 dark:text-white">Edit Task</h2>

        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black "
          required
          disabled={loading}
        />

        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black "
          required
          disabled={loading}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Task'}
        </button>

        {error && <p className="text-red-600 text-center">{error}</p>}
      </form>
    </Layout>
  );
}
