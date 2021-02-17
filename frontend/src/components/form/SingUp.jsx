import React, { Component } from "react";
import './SingIn-Up.scss';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import logo2 from '../../images/avater.png';
import axios from "axios";

export default class FormSignUp extends Component {
  constructor(props) {
    super()
    console.log(props);
  }

  state = {
    form: {
      nombres: '',
      apellidos: '',
      email: '',
      usuario: '',
      pasword: ''
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.nombres]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = {
      nombres: this.state.form.nombres,
      apellidos: this.state.form.apellidos,
      email: this.state.form.email,
      usuario: this.state.form.usuario,
      pasword: this.state.form.pasword
    }
    axios.post('http://localhost:4000/api/personas', data)
      .then(res => {
        console.log(res);
        console.log(res.data);
        // alert('Correcto');
        this.props.history.push('/')
      })
      .catch(err =>
        console.log(err),
        // alert('Incorrecto')
      );
  }

  render() {
    return (
      <section className="container-fluid registros">
        <article className="authenticateIdentity">
          <div className="card">
            <img className="img-fluid card-img-top p-3" src={logo2} alt="Logo" loading="lazy" id="logo2" />
            <div className="form">
              <div className="form-sign-up">
                <form className="card-body" onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label >Nombre</label>
                      <input type="text" className="form-control firstName" name="nombres" id="firstName" placeholder="Nombre" onChange={this.handleChange} required />
                    </div>

                    <div className="form-group col-md-6">
                      <label >Apellido</label>
                      <input type="text" className="form-control lastName" name="apellidos" id="lastName" placeholder="Apellido"  onChange={this.handleChange} required />
                    </div>

                    <div className="form-group col-md-12">
                      <label >Correo electrónico</label>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"><i className="fas fa-at"></i></div>
                        </div>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Correo electrónico"  onChange={this.handleChange} required />
                      </div>
                    </div>

                    <div className="form-group col-md-6">
                      <label >Usuario</label>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"><i className="fas fa-user"></i></div>
                        </div>
                        <input type="text" className="form-control" name="usuario" id="userName" placeholder="Usuario" onChange={this.handleChange} required />
                      </div>
                    </div>

                    <div className="form-group col-md-6">
                      <label >Contraseña</label>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"><i className="fas fa-user-lock"></i></div>
                        </div>
                        <input type="password" className="form-control" name="pasword" id="password" placeholder="********"  onChange={this.handleChange} required />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" variant="info" className="btn-form">Regístrate</Button>
                </form>
                <div className="card-footer">
                  <p className="card-text forgot-password text-right">
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
}

// export default FormSignUp;