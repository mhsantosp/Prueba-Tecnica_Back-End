import React from 'react';
import './Auth.scss';
import logo2 from '../../images/avater.png';
import { Link } from "react-router-dom";
import { InputGroup, Button, Image } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Axios from "axios";

export default function Prueba() {
  const URL = 'http://localhost:3000/auth/signin';

  const formSchema = Yup.object().shape({
    email: Yup.string().required("Campo requerido").email("Correo Electronico Invalido"),
    password: Yup.string().required("Campo Requerido").min(8, `Mínimo 8 caracteres`)
  });

  return (
    <section className="container-fluid registros">
      <article className="authenticateIdentity">
        <div className="card">
          <Image roundedCircle className="img-fluid card-img-top p-3" src={logo2} alt="Logo" loading="lazy" id="logo2" />
          <div className="form">
            <div className="form-log-in">
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                  alert("Ingreso valido!");
                  console.log(values);
                  // Enviar los valores a la Base de Datos
                  const dataInicio = { email: values.email, password: values.password }
                  Axios.post(URL, dataInicio)
                    .then(res => {
                      console.log(res.data.userFound)
                      if (res.data) {
                        let data = res.data;
                        localStorage.setItem('_id', data.userFound['_id'], { path: "/" });
                        localStorage.setItem('names', data.userFound['names'], { path: "/" });
                        localStorage.setItem('lastNames', data.userFound['lastNames'], { path: "/" });
                        localStorage.setItem('email', data.userFound['email'], { path: "/" });
                        localStorage.setItem('nameUser', data.userFound['nameUser'], { path: "/" });
                        window.location.href = '/registro-usuario'; // redirecciona a registro de nuevo usuario
                      } else {
                        console.log('Algo salio muy mal!!')
                      }
                      return res.data;
                    })
                    .catch(err => {
                      console.log('Error', err);
                    })
                }}
              >
                {({ values, errors, touched, handleSubmit, handleBlur, handleChange, isSubmitting, validating, valid }) => {
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
                              onBlur={handleBlur}
                            />
                          </InputGroup>
                          <ErrorMessage name="email" component="div" className="field-error text-danger" />
                        </div>

                        <div className="form-group col-sm-12 col-md-12">
                          <label htmlFor="password">Contraseña</label>
                          <InputGroup>
                            <InputGroup.Prepend>
                              <InputGroup.Text><i className="fas fa-user-lock"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Field className="form-control"
                              placeholder="**********"
                              type="password"
                              name="password"
                              id="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </InputGroup>
                          <ErrorMessage name="password" component="div" className="field-error text-danger" />
                        </div>
                      </div>

                      <Button
                        className="btn-form"
                        type="submit"
                        variant="info"
                        disabled={isSubmitting}
                      >Iniciar sesión
                      </Button>
                    </Form>
                  )
                }}
              </Formik>
              <div className="card-footer">
                <p className="card-text text-right">
                  No estas registrado? <Link to="/registro-usuario" rel="noopener noreferrer">Regístrate</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}