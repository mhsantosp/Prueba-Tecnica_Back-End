import React, { useState } from "react";
import './Perfil.scss';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Card, Col, Form, Row, Button, InputGroup } from 'react-bootstrap';

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  genero: yup.string().required(),
  email: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  file: yup.string().required(),
  terms: yup.bool().required(),
});

export default function Perfil() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        /* firstName: 'Mark',
        lastName: 'Otto', */
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <section className="container">
          <article>
            <Card>
              <Card.Header className="h3">Datos Registrados</Card.Header>
              <Card.Body>
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationFormik101">
                      <Form.Label className="h5">Nombres</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nombres"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        isValid={touched.firstName && !errors.firstName}
                      />
                      <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationFormik102">
                      <Form.Label className="h5">Apellidos</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Apellidos"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        isValid={touched.lastName && !errors.lastName}
                      />
                      <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationFormikGenerol2">
                      <Form.Label className="h5">Genero</Form.Label>
                      <Row className="genero mx-auto">
                        <Col md="6" className="col">
                          <Form.Check
                            type="radio"
                            label="Mujer"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                          />
                        </Col>
                        <Col md="6" className="col">
                          <Form.Check
                            type="radio"
                            label="Hombre"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                          />
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationFormikEmail2">
                      <Form.Label className="h5">Correo electrónico</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-at"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="email"
                          placeholder="Correo electrónico"
                          aria-describedby="inputGroupPrepend"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.email}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationFormikUsername2">
                      <Form.Label className="h5">Usuario</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-user"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          isInvalid={!!errors.username}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.username}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationFormikPassword2">
                      <Form.Label className="h5">Contraseña</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-user-lock"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="password"
                          placeholder="password"
                          aria-describedby="inputGroupPrepend"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.password}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Form.Row>

                  <Form.Group as={Col} md="8" className="mx-auto imagen">
                    <Form.File
                      className="position-relative"
                      required
                      name="file"
                      label="Imagen de perfil"
                      onChange={handleChange}
                      isInvalid={!!errors.file}
                      feedback={errors.file}
                      id="validationFormik107"
                      feedbackTooltip
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Check
                      required
                      type="switch"
                      name="terms"
                      label="Acepte, si esta seguro de los cambios"
                      onChange={handleChange}
                      isInvalid={!!errors.terms}
                      feedback={errors.terms}
                      id="validationFormik106"
                      feedbackTooltip
                    />
                  </Form.Group>

                  <Button type="submit">Guardar cambios</Button>
                </Form>
              </Card.Body>
            </Card>
          </article>
        </section>
      )}
    </Formik>
  );
}