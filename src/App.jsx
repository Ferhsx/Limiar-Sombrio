// src/App.jsx
import { Routes, Route } from 'react-router-dom';
// Crie estes arquivos vazios por enquanto nas suas respectivas pastas
import HomePage from './pages/HomePage';
import GrimorioPage from './pages/GrimorioPage.jsx';
import FichaPage from './pages/FichaPage';
import MainLayout from './layouts/MainLayout';

export default function App() {
  return (
    <Routes>
      {/* Todas as rotas dentro do MainLayout terão o mesmo header/footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/grimorio" element={<GrimorioPage />} />
        <Route path="/ficha" element={<FichaPage />} />
      </Route>
    </Routes>
  );
}