import { useState } from 'react';
import api from '../api/axios';
import { Task } from '../types';
import { useNavigate } from 'react-router-dom';

export default function AddTask() {
  const [task, setTask] = useState<Task>({ title: '', description: '', completed: false });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post('/tasks', task);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input name="title" onChange={handleChange} placeholder="Title" />
      <textarea name="description" onChange={handleChange} placeholder="Description" />
      <button type="submit">Create</button>
    </form>
  );
}
