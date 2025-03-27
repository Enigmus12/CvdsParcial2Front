import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConsultarDisponibilidad from './pages/ConsultarProductos';
import './styles/Global.css';
import RealizarPago from './pages/RealizarPago';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultar-productos" element={<ConsultarDisponibilidad />} />
        <Route path="/realizar-pago" element={<RealizarPago />} />
      </Routes>
    </Router>
  );
}

export default App;