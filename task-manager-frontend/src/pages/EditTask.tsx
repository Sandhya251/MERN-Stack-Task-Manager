import { useEffect, useState } from 'react';
import api from '../api/axios';
import { Task } from '../types';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';


export default function EditTask() {
  const [task, setTask] = useState<Task>({ title: '', description: '', completed: false });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await api.get(`/tasks/${id}`);
      setTask(res.data);
    };
    fetchTask();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.put(`/tasks/${id}`, task);
    navigate('/dashboard');
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">Edit Task</h2>

        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Update Task
        </button>
      </form>
    </Layout>
  );
}
