import React, { useState } from 'react';
import './SingIn-Up.scss';
import logo2 from '../../images/avater.png';
import { Link } from "react-router-dom";
import { Form, InputGroup, Button, Col } from 'react-bootstrap';
import { useFormik } from "formik";
import Axios from "axios";

export default function Prueba() {
  const [data, setData] = useState({});

  const URL = 'http://localhost:4000/api/personas';

  const { values, isSubmitting, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombres: '', apellidos: '', email: '', usuario: '', pasword: '',
    },
    onSubmit: values => {
      console.log(values);
      // Enviar los valores a la Base de Datos
      Axios.post(URL, {
        nombres: values.nombres,
        apellidos: values.apellidos,
        email: values.email,
        usuario: values.usuario,
        pasword: values.pasword
      })
        .then(response => {
          console.log(response);
          setData(response.data);
          window.location.href = '/';
        })
    },
    validate: values => {
      const errors = {};
      if (!values.nombres || values.nombres.length < 2) errors.nombres = "Nombre inválido";
      if (!values.apellidos || values.apellidos.length < 2) errors.apellidos = "Apellido inválido";
      if (!values.email) {
        errors.email = 'Requerido';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Correo electrónico inválido';
      }

      if (!values.usuario || values.usuario.length < 2) errors.usuario = "Usuario inválido";

      const passwordRegex = /(?=.*[0-9])/;
      if (!values.pasword) {
        errors.pasword = "Requerido";
      } else if (values.pasword.length < 8) {
        errors.pasword = "La contraseña debe tener 8 caracteres.";
      } else if (!passwordRegex.test(values.pasword)) {
        errors.pasword = "Contraseña invalida. Debe contener un número.";
      }

      return errors;
    }
  });
  console.log(errors);
  return (
    <section className="container-fluid registros">
      <article className="authenticateIdentity">
        <div className="card">
          <img className="img-fluid card-img-top p-3" src={logo2} alt="Logo" loading="lazy" id="logo2" />
          <div className="form">
            <div className="form-log-in">
              <Form className="card-body" onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} sm="12" md="6">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control
                      value={values.nombres}
                      onChange={handleChange}
                      name="nombres"
                      placeholder="Nombres"
                      type="text"
                    />
                    <Form.Text>{errors.nombres ? errors.nombres : ''}</Form.Text>
                  </Form.Group>

                  <Form.Group as={Col} sm="12" md="6">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control
                      value={values.apellidos}
                      onChange={handleChange}
                      name="apellidos"
                      placeholder="Apellidos"
                      type="text"
                    />
                    <Form.Text>{errors.apellidos ? errors.apellidos : ''}</Form.Text>
                  </Form.Group>

                  <Form.Group as={Col} sm="12" md="12">
                    <Form.Label>Correo electrónico</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text><i className="fas fa-envelope"></i></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        value={values.email}
                        onChange={handleChange}
                        name="email"
                        placeholder="Correo electrónico"
                        type="email"
                      />
                    </InputGroup>
                    <Form.Text>{errors.email ? errors.email : ''}</Form.Text>
                  </Form.Group>

                  <Form.Group as={Col} sm="12" md="6">
                    <Form.Label>Usuario</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text><i className="fas fa-at"></i></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        value={values.usuario}
                        onChange={handleChange}
                        name="usuario"
                        placeholder="Usuario"
                        type="text"
                      />
                    </InputGroup>
                    <Form.Text>{errors.usuario ? errors.usuario : ''}</Form.Text>
                  </Form.Group>

                  <Form.Group as={Col} sm="12" md="6">
                    <Form.Label>Contraseña</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text><i className="fas fa-user-lock"></i></InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        value={values.pasword}
                        onChange={handleChange}
                        name="pasword"
                        placeholder="**********"
                        type="password"
                      />
                    </InputGroup>
                    <Form.Text>{errors.pasword ? errors.pasword : ''}</Form.Text>
                  </Form.Group>
                </Form.Row>
                <Button type="submit" variant="info" className="btn-form" disabled={isSubmitting}>Registrarse</Button>
              </Form>
              <div className="card-footer">
                <p className="card-text text-right">
                  Si ya estas registrado <Link to="/" rel="noopener noreferrer">Inicia sesión</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}