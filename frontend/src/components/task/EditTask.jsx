import React, { useState, useEffect } from 'react';
import { Modal, Button, Card, Table } from 'react-bootstrap';
import Editar from '../../images/edit.png';
import axios from 'axios';

export default function NuevaTarea(props) {
  const id_user = localStorage.getItem('_id')
  const db = `http://localhost:4000/api/tareas/${id_user}`

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [employees, setEmployees] = useState([]);

  const getData = async () => {
    let url = 'http://localhost:4000/api/tareas/idusuario'

    const response = await axios.get(url)
    console.log('response', response)
    setEmployees(response.data)
  }
  useEffect(() => {
    getData()
  }, []) // don't forget this empty bracket it indicates the function will only run once when the component will load initially
  /*thead*/
  const renderHeader = () => {
    let headerElement = ['Imagen Tarea', 'Nombre', 'Prioridad', 'F. Vencimiento']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }
  /*tbody*/
  const renderBody = () => {
    return employees && employees.map(({ _id, imgtarea, nametarea, prioridadtarea, fechavencimiento }) => {
      return (
        <tr key={_id}>
          <td>{imgtarea}</td>
          <td>{nametarea}</td>
          <td>{prioridadtarea}</td>
          <td>{fechavencimiento}</td>
        </tr>
      )
    })
  }


  const [EditTask, setEditTask] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setEditTask(value)
  }

  const handleOnClick = async (event) => {
    event.preventDefault();
    event.target.disabled = true;
    const lastTask = props.usuario.tasks[props.usuario.tasks.length - 1]
    if (lastTask._id == undefined) {
      lastTask = {
        _id: 0
      }
    } else { }

    const task = {
      _id: parseInt(lastTask._id) + 1,
      task: EditTask
    }

    props.usuario.tasks.push(task)

    axios.put(db, props.usuario)
      .then(response => {
        props.peticionGet()
        handleShow(false)
      })

    console.log(props.usuario)
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <img src={Editar} alt="editar" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Tarea</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card>
            <Card.Body>
              <Table striped bordered hover size="sm" responsive id='employee'>
                <thead>
                  <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                  {renderBody()}
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