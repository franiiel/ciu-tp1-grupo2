import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nombreLogo from "../../public/imagenes/nombreLogo.png";
import carritoIcon from "../../public/imagenes/carrito.png";

function Navegacion() {
  return (
    <>
      <Navbar className="mi-navbar" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={nombreLogo} alt="Luna & Granos Café" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/carta">Carta</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ms-auto carrito-container">
            <Nav.Link as={Link} to="/carrito">
              <img src={carritoIcon} alt="Carrito" className="carrito-icon" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegacion;