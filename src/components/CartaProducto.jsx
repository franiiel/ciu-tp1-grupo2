import React from "react";
import { Card, Button } from "react-bootstrap";

function CartaProducto({producto, aniadirAlCarrito}) {
    return (
    <Card className="product-car h-100 shadow-sm">

      <Card.Img 
        variant= "top"  // Ubicacion de la imagen dentro de la tarjeta
        src={producto.imagen} 
        alt={producto.nombre}   // Describe la imagen
        className="product-image" 
      />

      <Card.Body className="d-flex flex-column">

        <Card.Title className="producto-titulo">{producto.nombre}</Card.Title>

        <Card.Text className="producto-precio">Precio: ${producto.precio}</Card.Text>

        <Button variant="primary" size="sm" className="boton-car" onClick={() => aniadirAlCarrito(producto)}>
          Agregar Producto  
        </Button>

      </Card.Body>
    </Card>
  );             
}

export default CartaProducto;