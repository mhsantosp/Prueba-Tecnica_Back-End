import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../images/logo.svg';
import './Header.scss';

export default class Header extends React.Component {
  state = {
    usuario: localStorage.getItem('nombres')
  }

  cerrarSesion = () => {
    localStorage.removeItem('_id', { path: "/" });
    localStorage.removeItem('nombres', { path: "/" });
    localStorage.removeItem('apellidos', { path: "/" });
    localStorage.removeItem('email', { path: "/" });
    localStorage.removeItem('usuario', { path: "/" });
    window.location.href = '/';
  }

  render() {
    return (
      <div className="header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Navbar.Brand >
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="ml-auto">
            {
              this.state.usuario == null
                ?
                <Nav.Link href="/">Ingresar</Nav.Link>
                :
                <NavDropdown title={localStorage.getItem('nombres')} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                  <NavDropdown.Item href="/tareas">Tareas</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => this.cerrarSesion()}>Salir</NavDropdown.Item>
                </NavDropdown>
            }
          </Nav>
        </Navbar>
      </div>
    );
  }
}