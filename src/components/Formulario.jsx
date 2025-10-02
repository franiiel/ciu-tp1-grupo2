import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";


export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    fecha: "",
    hora: "",
    mensaje: "",
  });
  const [error, setError] = useState({});
  const [enviado, setEnviado] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setEnviado(false);
  };
  const validaciones = () => {
    let errores = {};
    if (!formData.nombre.trim()) {
      errores.nombre = "El nombre es obligatorio";
    }
    if (!formData.email.trim()) {
      errores.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errores.email = "El email no es valido";
    }
    if (!formData.fecha) {
      errores.fecha = "La fecha es obligatoria";
    }
    if (!formData.hora) {
      errores.hora = "La hora es obligatoria";
    }
    if (!formData.mensaje.trim()) {
      errores.mensaje = "El mensaje es obligatorio";
    }

    return errores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validaciones();
    if (Object.keys(erroresValidacion).length > 0 > 0) {
      setError(erroresValidacion);
      setEnviado(false);
    } else {
      setError({});
      setEnviado(true);
      console.log("Reserva:", formData);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <h2 className="text-center mb-4">Formulario de Reserva</h2>

          {enviado && (
            <Alert variant="success">
              ✅ Tu reserva fue enviada correctamente.
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                placeholder="Ingresá tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                isInvalid={!!error.nombre}
              />
              <Form.Control.Feedback type="invalid">
                {error.nombnre}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Ingresá tu correo"
                value={formData.email}
                onChange={handleChange}
                isInvalid={error.nombre}
              />
              <Form.Control.Feedback type="invalid">
                {error.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha de reserva</Form.Label>
              <Form.Control
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                isInvalid={error.fecha}
              />
              <Form.Control.Feedback type="invalid">
                {error.fecha}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Hora de reserva</Form.Label>
              <Form.Control
                type="time"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                isInvalid={error.hora}
              />
              <Form.Control.Feedback type="invalid">
                {error.hora}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                isInvalid={error.mensaje}
              />
              <Form.Control.Feedback type="invalid">
                {error.mensaje}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="boton-car">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
