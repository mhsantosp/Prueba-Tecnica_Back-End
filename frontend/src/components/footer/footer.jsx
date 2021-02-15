import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container info">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h5 className="white-text">Sistema para la gestión de tareas</h5>
          </div>
          <div className="col-sm-12 col-md-6">
            <Nav defaultActiveKey="/home" className="social">
              <Nav.Link href="https://www.linkedin.com/in/msantospineda" target="_blank" rel="noopener noreferrer" ><i className="fab fa-linkedin-in"></i></Nav.Link>
              <Nav.Link href="https://github.com/mhsantosp/Prueba-Tecnica_Back-End" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github"></i></Nav.Link>
            </Nav>
          </div>
        </div>
      </div>
      <div className="copyright py-2">
        <div className="container">
          <p className="m-0">© 2021 Copyright Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;