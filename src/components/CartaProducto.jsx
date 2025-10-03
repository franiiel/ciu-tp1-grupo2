import { Card, Button } from "react-bootstrap";
import { useState } from "react";

function CartaProducto({ producto, onAdd }) {
  const [animar, setAnimar] = useState(false);

  const handleClick = () => {
    // activar animación
    setAnimar(true);

    // después de 500ms sacar la clase
    setTimeout(() => setAnimar(false), 500);
    
    onAdd(producto);
  };

  return (
    <Card className="product-car h-100 shadow-sm">
      <Card.Img
        variant="top" // Ubicacion de la imagen dentro de la tarjeta
        src={producto.imagen}
        alt={producto.nombre} // Describe la imagen
        className="product-image"
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="producto-titulo">{producto.nombre}</Card.Title>

        <Card.Text className="producto-precio">
          Precio: ${producto.precio}
        </Card.Text>

        <Button variant="primary" className={`boton-car ${animar ? "animar" : ""}`} onClick={handleClick}>
          Agregar Producto
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartaProducto;
