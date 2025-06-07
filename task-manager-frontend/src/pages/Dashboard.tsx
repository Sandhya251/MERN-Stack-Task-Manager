import { useEffect, useState } from 'react';
import api from '../api/axios';
import { Task } from '../types';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';


export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await api.get('/tasks');
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

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

    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-white p-4 rounded shadow flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
          </div>
          <button
            onClick={() => navigate(`/edit-task/${task._id}`)}
            className="text-indigo-600 hover:underline"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  </Layout>
);
}
