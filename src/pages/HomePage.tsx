import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div>
      <Header title="ECICredit" />
      <div className="content-container">
        <div className="button-container">
        <button className="btn" onClick={() => navigate('/consultar-productos')}>
          Consultar Disponibilidad
        </button>
          <button className="btn" onClick={() => navigate('/realizar-compra')}>
            Realizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
