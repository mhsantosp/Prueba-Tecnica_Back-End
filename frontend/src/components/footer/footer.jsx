import React from 'react';
import { Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <h5 className="white-text">Links</h5>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">GitHub</Nav.Link>
              <Nav.Link eventKey="link-1">LinkdIn</Nav.Link>
            </Nav>
          </div>
        </div>
      </div>
      <div className="footer-copyright py-2">
        <div className="container">
          © 2021 Copyright Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}

export default Footer;