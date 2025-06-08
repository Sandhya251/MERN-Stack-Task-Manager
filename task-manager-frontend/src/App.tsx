import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import { AuthProvider } from './auth/AuthContext';
import PrivateRoute from './auth/PrivateRoute';
import Home from './pages/Home';



function App() {
  return (
     
    <AuthProvider>
      <Router>
        <Routes>

<Route path="/" element={<Home />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/add-task" element={<PrivateRoute><AddTask /></PrivateRoute>} />
          <Route path="/edit-task/:id" element={<PrivateRoute><EditTask /></PrivateRoute>} />
        </Routes>
      </Router>

    </AuthProvider>
  );
}

export default App;

