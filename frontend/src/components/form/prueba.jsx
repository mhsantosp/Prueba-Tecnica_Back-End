import React, { useState } from 'react';
import './SingIn-Up.scss';
import logo2 from '../../images/avater.png';
import { Link } from "react-router-dom";
import { InputGroup, Button, Row, Col, Image } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Axios from "axios";

export default function Prueba() {
  const [formValues, setFormValues] = useState();
  const URL = 'http://localhost:4000/api/personas/';

  const formSchema = Yup.object().shape({
    email: Yup.string().required("Campo requerido").email("Correo Electronico Invalido"),
    pasword: Yup.string().required("Campo Requerido").min(8, `Mínimo 8 caracteres`),
  });

  return (
    <section className="container-fluid registros">
      <article className="authenticateIdentity">
        <div className="card">
          <Image roundedCircle className="img-fluid card-img-top p-3" src={logo2} alt="Logo" loading="lazy" id="logo2" />
          <div className="form">
            <div className="form-log-in">
              <Formik
                initialValues={{ email: "", pasword: "" }}

                validationSchema={formSchema}

                onSubmit={(values) => {
                  console.log(values);
                  // Enviar los valores a la Base de Datos
                  Axios.get(`http://localhost:4000/api/personas/:id`)
                    .then(res => {
                      console.log(res.data);
                      return res.data;
                    })
                    .then(res => {
                      if (res.length > 0) {
                        localStorage.setItem('_id', res._id, { path: "/" });
                        localStorage.setItem('nombres', res.nombres, { path: "/" });
                        localStorage.setItem('apellidos', res.apellidos, { path: "/" });
                        localStorage.setItem('email', res.email, { path: "/" });
                        localStorage.setItem('usuario', res.usuario, { path: "/" });
                        // window.location.href = '/inicio'; //Ruta de redirección
                        // console.log(`Usuario correcto: Bienbenid@ ${res.name} ${res.lastname}`);
                      } else {
                        console.log('Usuario y/o Password incorrecto');
                      }
                    })
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleSubmit,
                  handleChange,
                  isSubmitting,
                  validating,
                  valid,
                }) => {
                  return (
                    <Form className="card-body" onSubmit={handleSubmit} >
                      <div className="form-row">
                        <div className="form-group col-sm-12 col-md-12">
                          <label htmlFor="email">Correo electrónico</label>
                          <InputGroup>
                            <InputGroup.Prepend>
                              <InputGroup.Text><i className="fas fa-envelope"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Field className="form-control"
                              placeholder="Correo electrónico"
                              type="email"
                              name="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                            />
                          </InputGroup>
                          <ErrorMessage name="email" component="div" className="field-error text-danger" />
                        </div>

                        <div className="form-group col-sm-12 col-md-12">
                          <label htmlFor="pasword">Contraseña</label>
                          <InputGroup>
                            <InputGroup.Prepend>
                              <InputGroup.Text><i className="fas fa-user-lock"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Field className="form-control"
                              placeholder="**********"
                              type="password"
                              name="pasword"
                              id="pasword"
                              value={values.pasword}
                              onChange={handleChange}
                            />
                          </InputGroup>
                          <ErrorMessage name="pasword" component="div" className="field-error text-danger" />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        variant="info"
                        className="btn-form"
                        disabled={isSubmitting}>
                        Iniciar sesión
                      </Button>
                    </Form>
                  )
                }}
              </Formik>
              <div className="card-footer">
                <p className="card-text text-right">
                  No estas registrado? <Link to="/nuevo-usuario" rel="noopener noreferrer">Regístrate</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}