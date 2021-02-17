import React, { useState, useEffect } from 'react';
import { Modal, Button, Card, Table } from 'react-bootstrap';
import Agregar from '../../images/add.png';
import axios from 'axios';

export default function NuevaTarea(props) {
  const id_user = localStorage.getItem('_id')
  const db = `http://localhost:4000/api/tareas/${id_user}`

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newTask, setNewTask] = useState('');


  const handleChange = e => {
    const { value } = e.target;
    setNewTask(value)
  }

  const handleOnClick = async (event) => {
    event.preventDefault();
    event.target.disabled = true;
    // const lastTask = props.usuario.tasks[props.usuario.tasks.length]
    // if (lastTask._id == undefined) {
    //   lastTask = {
    //     _id: 0
    //   }
    // } else { }

    // const task = {
    //   _id: parseInt(lastTask._id) + 1,
    //   task: newTask
    // }

    // props.usuario.tasks.push(task)

    axios.post(db, props.usuario)
      .then(response => {
        props.peticionGet()
        handleShow(false)
      })

    console.log(props.usuario)
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <img src={Agregar} alt="agregar" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Tarea</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card>
            <Card.Body>
              <Table striped bordered hover size="sm" responsive>
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Prioridad</th>
                    <th>Fecha vencimiento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input name="task" value={newTask.task}
                        onChange={handleChange} type="file" />
                    </td>
                    <td>
                      <input name="task" value={newTask.task}
                        onChange={handleChange} type="text" />
                    </td>
                    <td>
                      <input name="task" value={newTask.task}
                        onChange={handleChange} type="text" />
                    </td>
                    <td>
                      <input type="date" name="vencimiento" id="vencimiento" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleOnClick}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}