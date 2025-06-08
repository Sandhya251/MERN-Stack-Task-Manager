import React from 'react';

const Home = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Task Manager</h1>
      <p className="text-lg">Please <a href="/login" className="text-blue-500 underline">Login</a> or <a href="/register" className="text-blue-500 underline">Register</a> to continue.</p>
    </div>
  );
};

export default Home;
