import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../images/logo.svg';
import './Header.scss';

export default class Header extends React.Component {
  state = {
    nameUser: localStorage.getItem('nameUser')
  }

  cerrarSesion = () => {
    localStorage.removeItem('_id', { path: "/" });
    localStorage.removeItem('nombres', { path: "/" });
    localStorage.removeItem('apellidos', { path: "/" });
    localStorage.removeItem('email', { path: "/" });
    localStorage.removeItem('nameUser', { path: "/" });
    window.location.href = '/'; // redireciona al inicio de sesión
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
              this.state.nameUser == null
                ?
                <Nav.Link href="/">Ingresar</Nav.Link>
                :
                <NavDropdown title={localStorage.getItem('nameUser')} id="collasible-nav-dropdown">
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