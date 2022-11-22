import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../userProvider";
import Navbar from "./navbar";

const Land = () => {
  const { usuario } = useUserContext();
  useEffect(() => {
    console.log(usuario.name);
  }, []);

  return (
    <div className="fluid">
      <Navbar></Navbar>
      <div className="container fluid">
        <div className="content">
          <div className="container">
            <div className="row land">
              <div className="row">
                <div className="col-md-7">
                  <h1> Hola {usuario.name}</h1>
                  <br></br>
                  <h3>Correo: {usuario.email}</h3>
                </div>
                <div className="col-md-5">
                  <img
                    src={usuario.imageUrl}
                    alt="Imagen de perfil"
                    referrerPolicy="no-referrer"
                  ></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <Link to="/agregarColab">
                    <button className="boton_agregar">Agregar</button>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/editarColab">
                    <button className="boton_agregar">Editar</button>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/Planeador">
                    <button className="boton_agregar">Planeador</button>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/Visita">
                    <button className="boton_agregar">Visita Programada</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Land;
