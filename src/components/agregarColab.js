import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Navbar from "./navbar";
import Modal from "react-bootstrap/Modal";
import {Link} from "react-router-dom";
import ConfirmacionAlta from "./ConfirmacionAlta";

const AgregarColab = () => {
  const {register,formState: { errors },handleSubmit,} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="fluid">
      <Navbar></Navbar>
      <div className="Container" style={{ padding: 30 }}>
        <div className="hijo" style={{ margin: 0, padding: 50 }}>
          <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col>
                  <Form.Group controlID="ColbID">
                    <Form.Label>ColabID</Form.Label>
                    <Form.Control type="string" {...register("ColabID", { required: true })} placeholder="Ingresa el ID"/>
                    {errors.ColabID?.type === "required" && (
                      <p>Este campo es requerido</p>
                    )}
                  </Form.Group>
                  <br />
                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="string" {...register("Nombre", { required: true })} placeholder="Ingresa el nombre"/>
                    {errors.Nombre?.type === "required" && (
                      <p>Este campo es requerido</p>
                    )}
                  </Form.Group>
                  <br />
                  <Form.Group>
                    <Form.Label>Apeliido Paterno</Form.Label>
                    <Form.Control type="string" {...register("Apellido_Paterno", {
                        required: true,
                      })}placeholder="Ingresa el apellido"/>
                    {errors.Apellido_Paterno?.type === "required" && (
                      <p>Este campo es requerido</p>
                    )}
                  </Form.Group>
                  <br />
                  <Form.Group>
                    <Form.Label>Apeliido Materno</Form.Label>
                    <Form.Control
                      type="string" {...register("Apellido_Materno", {
                        required: true,
                      })}placeholder="Ingresa el apellido"/>
                    {errors.Apellido_Materno?.type === "required" && (
                      <p>Este campo es requerido</p>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                      type="email"
                      {...register("Correo", {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                      })}
                      placeholder="Ingresa el correo"
                    />
                    {errors.Correo?.type === "required" && (
                      <p>Este campo es requerido</p>
                    )}
                    {errors.Correo?.type === "pattern" && (
                      <p>El formato del correo no es valido</p>
                    )}
                  </Form.Group>
                  <br />
                  <Form.Group>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                      type="tel"
                      {...register("Telefono", {
                        required: true,
                        pattern:
                          /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/i,
                      })}
                      placeholder="Ingresa el numero telefónico"
                    />
                    {errors.Telefono?.type === "required" && (
                      <p>Este campo es requerido</p>
                    )}
                    {errors.Telefono?.type === "pattern" && (
                      <p>El formato del telefono no es valido</p>
                    )}
                  </Form.Group>
                  <br />
                  <Form.Group>
                    <Form.Label>Equipo</Form.Label>
                    <Form.Select {...register("Equipo", {required: true,})}>
                      <option disabled="disabled">Selecciona una opcion</option>
                      <option value="Frontera">Frontera</option>
                      <option value="Medio">Medio</option>
                      <option value="Sur">Sur</option>
                    </Form.Select>
                  </Form.Group>
                  <br />
                  <Form.Group controlId="FotoColab" className="mb-3">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" accept=".png,.jpg,.jpeg,.webp" {...register("FotoColab", { required: true })}/>
                    {errors.FotoColab?.type === "required" && (<p>Este campo es requerido</p>)}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button type="submit" value="Enviar" variant="success" size="lg" onClick={()=>onSubmit()}>Confirmar</Button>
                </Col>
                <Col>
                  <Button variant="danger" onClick={handleShow} size="lg">Cancelar</Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Cancelar Registro</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Los cambios no han sido guardados, ¿Deseas cancelar el registro?
                    </Modal.Body>
                    <Modal.Footer>
                      <Link to="/../land">
                      <Button variant="secondary" onClick={handleClose}>Pagina Principal</Button>
                      </Link>
                      <Button variant="primary" onClick={handleClose}>Continuar</Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AgregarColab;
