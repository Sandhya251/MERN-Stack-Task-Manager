// import { ReactNode } from 'react';

// const Layout = ({ children }: { children: ReactNode }) => {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
//       <div className="max-w-3xl mx-auto">
//         <header className="mb-6 text-center">
//           <h1 className="text-3xl font-bold text-indigo-600">Task Manager</h1>
//         </header>
//         <main>{children}</main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
import { ReactNode, useState, useEffect } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  // On mount, check if user prefers dark mode (optional)
  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <header className="mb-6 text-center flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Task Manager</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
