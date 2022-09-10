import express from "express";
import { v4 } from "uuid";
import cors from "cors";

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

// Armazenar os pedidos
const orders = [];

// Middleware validação de ID
const checkUserId = (request, response, next) => {
  const { id } = request.params;

  const index = orders.findIndex((order) => order.id === id);

  if (index < 0) {
    return response.status(404).json({ error: "Order not found" });
  }

  request.userIndex = index;
  request.userId = id;

  next();
};

// Lista de todos os pedidos
app.get("/orders", (request, response) => {
  return response.json(orders);
});

// Criação de pedido
app.post("/orders", (request, response) => {
  const { name, order, price } = request.body;

  const client = {
    id: v4(),
    name,
    order,
    price,
    status: "In preparation",
  };

  orders.push(client);

  return response.status(201).json(client);
});

// Atualização de pedido
app.put("/orders/:id", checkUserId, (request, response) => {
  const { name, order, price } = request.body;
  const id = request.userId;
  const index = request.userIndex;

  const updateOrder = { id, name, order, price, status: "In preparation" };

  orders[index] = updateOrder;

  return response.json(updateOrder);
});

// Deletar um pedido
app.delete("/orders/:id", checkUserId, (request, response) => {
  const index = request.userIndex;

  orders.splice(index, 1);

  return response.status(204).json();
});

// Consultar um pedido específico
app.get("/orders/:id", checkUserId, (request, response) => {
  const id = request.userId;
  const index = request.userIndex;

  const { name, order, price, status } = orders[index];

  const queryOrder = { id, name, order, price, status };

  orders[index] = queryOrder;

  return response.json(queryOrder);
});

// Alteração de status para "Pronto".
app.patch("/orders/:id", checkUserId, (request, response) => {
  const id = request.userId;
  const index = request.userIndex;

  const { name, order, price } = orders[index];

  const queryOrder = { id, name, order, price, status: "Ready order!" };

  orders[index] = queryOrder;

  return response.json(queryOrder);
});

app.listen(port, () => {
  console.log(`✅ Server starded on port ${port}`);
});
