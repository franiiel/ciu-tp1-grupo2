import React from 'react';
import CartaProducto from "./CartaProducto";
import { Row, Col } from "react-bootstrap";

function ListaProducto({productos, agregarAlCarrito}){
    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">  {/* xs={1} sm={2} md={3} lg={4}  => define cuantas columnas se muestran por tamaño */} 
            {productos.map(producto => (
                <Col key={producto.id}>
                 <CartaProducto producto={producto} onAdd={agregarAlCarrito}/>
                </Col>
            ))}
        </Row>
    );
}

export default ListaProducto;
