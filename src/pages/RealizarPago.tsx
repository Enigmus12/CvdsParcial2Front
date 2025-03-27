import { useState } from "react";
import axios from "axios";

const API_URL = "https://cvdsparcial-cscrbwgcdhebh5eg.canadacentral-01.azurewebsites.net/payment-service/pay";

interface User {
  id: string;
}

interface Item {
  name: string;
  unitPrice: number;
  quantity: number;
  totalAmount: number;
}

interface PaymentResponse {
  id: string;
  status: string;
  responseMessage: string;
}

const RealizarPago: React.FC = () => {
  const [user, setUser] = useState<User>({ id: "" });
  const [products, setProducts] = useState<Item[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [userTotal, setUserTotal] = useState<string>("");
  const [transaction, setTransaction] = useState<PaymentResponse | null>(null);
  const [error, setError] = useState<string>("");


  return (
    <div>
      <h2>Realizar Pago</h2>
      <input
        type="number"
        value={userTotal}
        onChange={(e) => setUserTotal(e.target.value)}
        placeholder="Ingresa el total"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {transaction && (
        <p>
          Pago {transaction.status === "APPROVED" ? "aprobado" : "rechazado"}:{" "}
          {transaction.responseMessage}
        </p>
      )}
    </div>
  );
};

export default RealizarPago;
