import React, { useState, useEffect } from 'react';
import { Card, Table, ButtonGroup, Button } from 'react-bootstrap';
import Editar from '../../images/edit.png';
import Eliminar from '../../images/delete.png';
import './Task.scss';
import ModalAgregar from './Add-Task';
import axios from 'axios';

export default function FormPropsTextFields() {
  const id_user = localStorage.getItem('id')
  const db = `https://api-fake-procrastin-app.vercel.app/users/${id_user}`

  const [data, setData] = useState({});

  const peticionGet = async () => {
    await axios.get(db)
      .then(response => {
        console.log(response)
        setData(response.data)
      })
  }

  useEffect(async () => {
    await peticionGet();
  }, [])

  return (
    <section>
      <article>
        <Card>
          <Card.Header>
            <h5>Tareas</h5>
            <ModalAgregar />
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover size="sm" responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Imagen de la tarea</th>
                  <th>Nombre de la tarea</th>
                  <th>Prioridad</th>
                  <th>Fecha vencimiento</th>
                  <th>Editar/Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>imagen</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <input type="date" name="vencimiento" id="vencimiento" />
                  </td>
                  <td>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="primary" id="editar">
                        <img src={Editar} alt="editar" />
                      </Button>
                      <Button variant="danger" id="eliminar">
                        <img src={Eliminar} alt="eliminar" />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>imagen</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <input type="date" name="vencimiento" id="vencimiento" />
                  </td>
                  <td>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="primary" id="editar">
                        <img src={Editar} alt="editar" />
                      </Button>
                      <Button variant="danger" id="eliminar">
                        <img src={Eliminar} alt="eliminar" />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </article>
    </section>
  );
}