import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-indigo-600">Task Manager</h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
