import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//imagenes
import logo from "../../public/imagenes/logo.jpeg"
import imagenInicio from "../../public/imagenes/home-image.png"

export default function Inicio() {
  return (
    <div className="home-page">
      <Container className="home-cont">
            {/* Logo y nombre */}
            <Row className="justify-content-center">
                <Col className='text-center' xs="auto">
                    <img src={logo} alt="Luna & Granos logo" className="home-logo" />
                </Col>
            </Row>

            {/* Descripcion */}
            <Row className="justify-content-center">
              <Col xs={12} md={10} className="text-center">
                <p className="home-descrip">
                  Experimenta momentos mágicos con
                  <br />
                  cada sorbo en nuestra acogedora cafetería.
                </p>
              </Col>
            </Row>

            {/* Imagen y boton */}
            <Row className="justify-content-center">
              <Col xs={12} md={10}>
                <div className="cont-img-bot">
                    <picture>
                      <source srcSet="../../public/imagenes/imagenPrincipal.png" media="(max-width: 768px)" />
                    <img
                      src="../../public/imagenes/home-image.png"
                      alt="Cafetería Luna & Granos"
                      className="home-image"
                    />
                    </picture>
                  <Link to="/carta" className="boton-inicio-link" aria-label="Ir a la carta">
                      <Button className='boton-inicio'> CARTA </Button>
                  </Link>
                </div>
              </Col>
            </Row>

        </Container>
      
    </div>
  )
}