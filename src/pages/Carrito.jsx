import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Carrito() {
  // Simulación de productos en el carrito
  const [carrito, setCarrito] = useState([
    { id: 1, nombre: 'Café Latte', cantidad: 2, precio: 500 },
    { id: 2, nombre: 'Té Verde', cantidad: 1, precio: 400 },
    { id: 3, nombre: 'Medialuna', cantidad: 3, precio: 150 },
  ]);

  const [mostrarModal, setMostrarModal] = useState(false);

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter(producto => producto.id !== id));
  };

  const totalCarrito = carrito.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );

  const confirmarPedido = () => {
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  return (
    <div className="container my-4">
      <h2>Tu Pedido</h2>
      <ListGroup as="ol" numbered>
        {carrito.map(producto => (
          <ListGroup.Item
            key={producto.id}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{producto.nombre}</div>
              Cantidad: {producto.cantidad} - Precio unitario: ${producto.precio}
            </div>
            <div className="d-flex flex-column align-items-end">
              <Badge bg="primary" pill>
                ${producto.precio * producto.cantidad}
              </Badge>
              <Button
                variant="danger"
                size="sm"
                className="mt-2"
                onClick={() => eliminarProducto(producto.id)}
              >
                Eliminar
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="mt-3 d-flex justify-content-between">
        <h5>Total:</h5>
        <h5>${totalCarrito}</h5>
      </div>

      <div className="text-end">
        <Button variant="success" onClick={confirmarPedido} disabled={carrito.length === 0}>
          Confirmar Pedido
        </Button>
      </div>

      {/* Modal de confirmación */}
      <Modal show={mostrarModal} onHide={cerrarModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pedido Confirmado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¡Gracias por tu pedido! Lo estamos preparando 😊
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


//Cosas que podés agregar después:
//Botones para aumentar/disminuir cantidad.
//Persistencia del carrito con localStorage.
//Mostrar el carrito como un sidebar o dropdown desde el navbar.

export default Carrito;
