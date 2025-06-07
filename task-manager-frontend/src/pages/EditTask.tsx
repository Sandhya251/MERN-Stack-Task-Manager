import { useEffect, useState } from 'react';
import api from '../api/axios';
import { Task } from '../types';
import { useNavigate, useParams } from 'react-router-dom';

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
    <form onSubmit={handleSubmit}>
      <h2>Edit Task</h2>
      <input name="title" value={task.title} onChange={handleChange} />
      <textarea name="description" value={task.description} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
}
