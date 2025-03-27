import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

interface Item {
  name: string;
  unitPrice: number;
  quantity: number;
}

interface Product {
  userId: string;
  items: Item[];
  totalAmount: number;
  status: string;
  responseMessage: string;
  date: string;
}


const ConsultarProductos: React.FC = () => {
  const [Payment, setBookings] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>('');

  const handleConsultar = () => {
    if (!userId) {
      setError("Por favor, ingrese un User ID");
      return;
    }

    setLoading(true);
    setError(null);

    axios.get<Product[]>(`http://localhost:8000/payment-service/user/${userId}`)
      .then(response => {
        console.log("Datos recibidos:", response.data);
        setBookings(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error obteniendo Productos:", error);
        setError("Error al cargar los productos");
        setLoading(false);
      });
  };

  return (
    <div>
      <Header title="Consultar Productos" />
      <h2>Consultar Productos</h2>
      
      <div className="user-id-input">
        <input 
          type="text" 
          placeholder="Ingrese User ID" 
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="input-user-id"
        />
        <button 
          onClick={handleConsultar}
          className="btn-consultar"
          disabled={loading}
        >
          {loading ? 'Consultando...' : 'Consultar'}
        </button>
      </div>
    
      <div id="contenedorHorarios" className="horarios-container">
        {Payment.length === 0 && !loading && !error ? (
          <p>No hay productos disponibles</p>
        ) : (
          Payment.map(Payment => (
            <div key={Payment.userId} className="horario-box">
              <p><strong>ID:</strong> {Payment.userId}</p>
              <p><strong>Productos:</strong></p>
                <ul>
                  {Payment.items.map((item, index) => (
                    <li key={index}>
                      {item.name} - {item.quantity} x ${item.unitPrice.toFixed(2)}
                    </li>
                  ))}
                </ul>
              <p><strong>Cantidad Total:</strong> {Payment.totalAmount}</p>
              <p><strong>Estado:</strong> {Payment.status}</p>
              <p><strong>Mensage:</strong> {Payment.responseMessage}</p>
              <p><strong>Fecha:</strong> {Payment.date}</p>
            </div>
          ))
        )}
      </div>
      
      <BackButton />
    </div>
  );
}

export default ConsultarProductos;