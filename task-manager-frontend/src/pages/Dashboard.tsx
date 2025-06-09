

import { useEffect, useState } from 'react';
import api from '../api/axios';
import { Task } from '../types';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import toast from 'react-hot-toast';

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDeleteTask = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    try {
      await api.delete(`/tasks/${id}`);
        toast.success('Task deleted successfully!');
      fetchTasks(); // refresh tasks list
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to delete task');
    }
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Tasks</h2>
        <button
          onClick={() => navigate('/add-task')}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Add Task
        </button>
      </div>

      {loading && <p className="text-center">Loading tasks...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {!loading && !error && (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold  text-black bg-white ">{task.title}</h3>
                <p className="text-sm  text-black bg-white ">{task.description}</p>
              </div>
              <div>
                <button
                  onClick={() => navigate(`/edit-task/${task._id}`)}
                  className="text-indigo-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(task._id!)}
                  className="text-red-600 hover:underline ml-4"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {tasks.length === 0 && (
            <p className="text-center text-gray-600">No tasks found. Add a new task!</p>
          )}
        </div>
      )}
    </Layout>
  );
}
