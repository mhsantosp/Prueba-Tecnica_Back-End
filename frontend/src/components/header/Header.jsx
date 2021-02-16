import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../images/logo.svg';
import './Header.scss';

export default class Header extends React.Component {
  state = {
    usuario: localStorage.getItem('name')
  }

  cerrarSesion = () => {
    localStorage.removeItem('id', { path: "/" });
    localStorage.removeItem('name', { path: "/" });
    localStorage.removeItem('lastname', { path: "/" });
    localStorage.removeItem('email', { path: "/" });
    localStorage.removeItem('user', { path: "/" });
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
                <NavDropdown title={localStorage.getItem('name')} id="collasible-nav-dropdown">
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