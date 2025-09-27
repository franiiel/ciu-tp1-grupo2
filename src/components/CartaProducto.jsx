import { Card, Button } from "react-bootstrap";

function CartaProducto({producto, aniadirAlCarrito}) {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img 
      variant={producto.nombre} 
      src={producto.imagen} 
      style= {{ height: "200px", objectFit: "cover" }}/>
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          Precio: ${producto.precio}</Card.Text>

        <Button variant="primary" onClick={() => aniadirAlCarrito(producto)}>Agregar Producto</Button>
      </Card.Body>
    </Card>
  );             
}

export default CartaProducto;