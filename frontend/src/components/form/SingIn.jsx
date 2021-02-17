import React, { Component } from "react";
import './SingIn-Up.scss';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import logo2 from '../../images/avater.png';
import axios from "axios";

const apiBD = 'http://localhost:4000/api/personas';

export default class Login extends Component {
  constructor(props) {
    super()
    // console.log(props);
  }

  state = {
    usuario: localStorage.getItem('usuario'),
    form: {
      usuario: '',
      pasword: ''
    }
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.nombres]: e.target.value
      }
    });
    // console.log(this.state.form);
  };

  handleSubmit = async e => {
    e.preventDefault()
    axios.get(`${apiBD}?email=${this.state.form.usuario}&pasword=${this.state.form.pasword}`)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .then(res => {
        if (res.length > 0) {
          var respuesta = res[0];
          localStorage.setItem('_id', respuesta._id, { path: "/" });
          localStorage.setItem('nombres', respuesta.nombres, { path: "/" });
          localStorage.setItem('apellidos', respuesta.apellidos, { path: "/" });
          localStorage.setItem('email', respuesta.email, { path: "/" });
          localStorage.setItem('usuario', respuesta.usuario, { path: "/" });
          window.location.href = '/tareas'; //Ruta de redirección
          console.log(`Usuario correcto: Bienbenid@ ${respuesta.nombres} ${respuesta.apellidos}`);
        } else {
          console.log('Usuario y/o Password incorrecto');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <section className="container-fluid registros">
        <article className="authenticateIdentity">
          <div className="card">
            <img className="img-fluid card-img-top p-3" src={logo2} alt="Logo" loading="lazy" id="logo2" />
            <div className="form">
              <div className="form-log-in">
                <form className="card-body" onSubmit={this.handleSubmit} id="form">
                  <div className="form-row">
                    <div className="form-group col-12">
                      <label>Usuario</label>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"><i className="fas fa-user"></i></div>
                        </div>
                        <input type="email" className="form-control" name="usuario" onChange={this.handleChange} placeholder="Correo electronico" required />
                      </div>
                    </div>

                    <div className="form-group col-12">
                      <label>Contraseña</label>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"><i className="fas fa-user-lock"></i></div>
                        </div>
                        <input type="password" className="form-control" name="pasword" onChange={this.handleChange} placeholder="********" required />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" variant="info" className="btn btn-form">Iniciar sesión</Button>
                </form>
                <div className="card-footer">
                  <p className="card-text text-right">
                    No estas registrado? <Link to="/nuevo-usuario" rel="noopener noreferrer">Regístrate</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Modal HTML
          <div id="myModal" className="modal fade">
            <div className="modal-dialog modal-confirm">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="icon-box">
                    <i className="material-icons">&#xE876;</i>
                  </div>
                  <h4 className="modal-title w-100">Awesome!</h4>
                </div>
                <div className="modal-body">
                  <p className="text-center">Your booking has been confirmed. Check your email for detials.</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
                </div>
              </div>
            </div>
          </div> */}
        </article>
      </section>
    );
  }
}