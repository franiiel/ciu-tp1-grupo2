
import React from 'react';
import ListaProducto from '../components/ListaProducto'
import {Container} from "react-bootstrap";

/*imagenes de la carta*/

import medialuna from "../assets/medialuna.png"
import latte from "../assets/latte.png"
import brownie from "../assets/brownie.png"
import cheesecake from "../assets/cheesecake.png"
import sanjyq from "../assets/san-jyq.png"
import expresso from "../assets/expresso.png"
import teVerde from "../assets/te-verde.png"
import cappuccino from "../assets/cappuccino.png"


function Carta() {
  const productos = [
    { id: 1, nombre: "Café Espresso", precio: 500, imagen: expresso },
    { id: 2, nombre: "Café Latte", precio: 700, imagen: latte },
    { id: 3, nombre: "Café Cappuccino", precio: 750, imagen: cappuccino },
    { id: 4, nombre: "Té Verde", precio: 400, imagen: teVerde },
    { id: 5, nombre: "Medialuna", precio: 300, imagen: medialuna },
    { id: 6, nombre: "Tostado Jamón y Queso", precio: 1200, imagen: sanjyq },
    { id: 7, nombre: "Brownie", precio: 600, imagen: brownie },
    { id: 8, nombre: "Cheesecake", precio: 850, imagen: cheesecake},
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
