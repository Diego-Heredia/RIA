import React from "react";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Navbar from "./navbar";

const AgregarColab = () => {
  return (
    <div className="fluid">
    <Navbar></Navbar>    
    <div className="Container">
      <div className="hijo" style={{ margin: 0, padding: 50 }}>
        <input type="file" maxFileSize={50}></input>
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group controlID="Colb_ID">
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="string" placeholder="Ingresa el ID" />
                </Form.Group>
                <br />
                <Form.Group controlID="Colab_name">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="string" placeholder="Ingresa el nombre" />
                </Form.Group>
                <br />
                <Form.Group controlID="Colab_Lname1">
                  <Form.Label>Apeliido Paterno</Form.Label>
                  <Form.Control type="string" placeholder="Ingresa el apellido" />
                </Form.Group>
                <br />
                <Form.Group controlID="Colab_Lname2">
                  <Form.Label>Apeliido Materno</Form.Label>
                  <Form.Control
                    type="string" placeholder="Ingresa el apellido" />
                </Form.Group>
              </Form>
            </Col>

            <Col>
              <Form>
                <Form.Group controlID="Colb_email">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa el correo" />
                </Form.Group>
                <br />
                <Form.Group controlName="Colab_phone">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Ingresa el numero telefónico"
                  />
                </Form.Group>
                <br />
                <Form.Group controlName="Colab_Team">
                  <Form.Label>Equipo</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle  id="dropdown-basic">
                      Selecciona el Equipo
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Frontera</Dropdown.Item>
                      <Dropdown.Item>Medio</Dropdown.Item>
                      <Dropdown.Item>Sur</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </Form>
              <br /> 
              <Button variant="success" size="lg">Confirmar</Button>{'  '}
              <Button variant="danger"  size="lg">Eliminar</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    </div>
  );
};

export default AgregarColab;
