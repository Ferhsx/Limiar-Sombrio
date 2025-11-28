// src/App.jsx
import { Routes, Route } from 'react-router-dom';
// Crie estes arquivos vazios por enquanto nas suas respectivas pastas
import HomePage from './pages/HomePage';
import GrimorioPage from './pages/GrimorioPage.jsx';
import FichaPage from './pages/FichaPage';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import { useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

export default function App() {
  const { currentUser } = useAuth();
  
  return (
    <Routes>
      <Route path="/login" element={currentUser ? <Navigate to="/" /> : <LoginPage />} />

      {/* Rotas protegidas */}
      <Route element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
      }>
        <Route path="/" element={currentUser ? <Dashboard /> : <HomePage />} />
        <Route path="/grimorio" element={<GrimorioPage />} />
        <Route path="/ficha" element={<FichaPage />} />
      </Route>
    </Routes>
  );
}