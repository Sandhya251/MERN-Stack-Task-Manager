import { useEffect, useState } from 'react';
import api from '../api/axios';
import { Task } from '../types';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h2>Your Tasks</h2>
      <button onClick={() => navigate('/add-task')}>Add Task</button>
      {tasks.map(task => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => navigate(`/edit-task/${task._id}`)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
