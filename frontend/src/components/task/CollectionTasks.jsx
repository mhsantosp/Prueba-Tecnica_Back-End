import React, { useState, useEffect } from 'react';
import { Card, Table, Image, ButtonGroup, Button } from 'react-bootstrap';
import Editar from '../../images/edit.png';
import Eliminar from '../../images/delete.png';
import './Task.scss';
import ModalAgregar from './NewTask';
import ModalEditar from './EditTask';
import axios from 'axios';

export default function FormPropsTextFields() {
  const id_persona = localStorage.getItem('_id');
  console.log(id_persona);

  const [employees, setEmployees] = useState([]);

  const getData = async () => {
    let url = `http://localhost:4000/api/tareas/${id_persona}`

    const response = await axios.get(url)
    console.log('response', response)
    setEmployees(response.data)
  }
  useEffect(() => {
    getData()
  }, []) // don't forget this empty bracket it indicates the function will only run once when the component will load initially
  /*thead*/
  const renderHeader = () => {
    let headerElement = ['Imagen Tarea', 'Nombre', 'Prioridad', 'F. Vencimiento', 'Opciones']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }
  /*tbody*/
  const renderBody = () => {
    return employees && employees.map(({ _id, imgtarea, nametarea, prioridadtarea, fechavencimiento }) => {
      return (
        <tr key={_id}>
          <td>
            <Image src={imgtarea} alt="Imagen de la tarea" class="imgTarea" width="80" rounded />
          </td>
          <td>
            <input type="text" value={nametarea} />
          </td>
          <td>
            {prioridadtarea}
          </td>
          <td>
            {fechavencimiento}
          </td>
          <td className='opration'>
            <ButtonGroup aria-label="Basic example">
              <ModalEditar/>
              <Button variant="danger" id="eliminar" onClick={() => removeData(_id)}>
                <img src={Eliminar} alt="eliminar" />
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      )
    })
  }
  const editarData = (_id) => {
    let url = `http://localhost:4000/api/tareas/${id_persona}`

    axios.update(url).then(res => {
      const edit = employees.filter(employee => _id !== employee._id)
      setEmployees(edit)
      console.log('res', res)
    })
  }
  const removeData = (_id) => {
    let url = `http://localhost:4000/api/tareas/${id_persona}`

    axios.delete(url).then(res => {
      const del = employees.filter(employee => _id !== employee._id)
      setEmployees(del)
      console.log('res', res)
    })
  }

  return (
    <section>
      <article>
        <Card>
          <Card.Header>
            <h5>Tareas</h5>
            <ModalAgregar />
          </Card.Header>
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
      </article>
    </section>
  );
}