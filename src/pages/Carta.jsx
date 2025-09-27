
import ListaProducto from '../components/ListaProducto'
import { Container, ListGroup, Badge } from "react-bootstrap";
function Carta() {
  const productos = [
    { id: 1, nombre: "Café Espresso", precio: 500, imagen: "" },
    { id: 2, nombre: "Café Latte", precio: 700, imagen: "" },
    { id: 3, nombre: "Café Cappuccino", precio: 750, imagen: "" },
    { id: 4, nombre: "Té Verde", precio: 400, imagen: "" },
    { id: 5, nombre: "Medialuna", precio: 300, imagen: "" },
    { id: 6, nombre: "Tostado Jamón y Queso", precio: 1200, imagen: "" },
    { id: 7, nombre: "Brownie", precio: 600, imagen: "" },
    { id: 8, nombre: "Cheesecake", precio: 850, imagen: "" },
  ];
   

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Carta del Café</h2>

      <ListaProducto productos={productos} aniadirAlCarrito={console.log(
        "Falta el implementar el carrito")} />
    </Container>
  );
}


export default Carta;
