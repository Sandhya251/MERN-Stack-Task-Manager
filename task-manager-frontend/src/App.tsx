import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import { AuthProvider } from './auth/AuthContext';
import PrivateRoute from './auth/PrivateRoute';




function App() {
  return (
     
    <AuthProvider>
      <Router>
        <Routes>


          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/add-task" element={<PrivateRoute><AddTask /></PrivateRoute>} />
          <Route path="/edit-task/:id" element={<PrivateRoute><EditTask /></PrivateRoute>} />
        </Routes>
      </Router>
             <div className="bg-red-500 text-white p-4 text-2xl font-bold">
      Tailwind should color this red with white text.
    </div>
    </AuthProvider>
  );
}

export default App;

