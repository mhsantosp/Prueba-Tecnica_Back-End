import React, { useState } from "react";
import './Perfil.scss';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Card, Col, Form, Row, Button, InputGroup } from 'react-bootstrap';

export default function Perfil() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className="container">
      <article>
        <Card>
          <Card.Header className="h3">Datos Registrados</Card.Header>
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label className="h5">Nombres</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nombres"
                    name="nombres"
                    value=""
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label className="h5">Apellidos</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apellidos"
                    name="apellidos"
                    value=""
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                  <Form.Label className="h5">Correo electrónico</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-at"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Correo electrónico"
                      aria-describedby="inputGroupPrepend"
                      required
                      value=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a Correo.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                  <Form.Label className="h5">Usuario</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-user"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      name="usuario"
                      placeholder="Usuario"
                      aria-describedby="inputGroupPrepend"
                      required
                      value=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a Usuario.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                  <Form.Label className="h5">Contraseña</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-user-lock"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      name="pasword"
                      placeholder="password"
                      aria-describedby="inputGroupPrepend"
                      required
                      value=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a Contraseña.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Check
                  required
                  label="Acepte, si esta seguro de los cambios"
                  feedback="Debes estar de acuerdo antes de enviar."
                  name="terms"
                />
              </Form.Group>

              <Button type="submit">Guardar cambios</Button>
            </Form>
          </Card.Body>
        </Card>
      </article>
    </section>
  )
}