import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../userProvider";
import Navbar from "./navbar";

const Land = () => {
  const { usuario } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(usuario.name);
    if (usuario == null || usuario == undefined) {
      navigate("/");
    }
  }, []);

  return (
    <div className="fluid">
      <Navbar></Navbar>
      <div className="container fluid land centrar">
        <div className="content">
          <div className="container">
            <div className="row" id="card">
              {usuario ? (
                <div className="row centrar">
                  <div className="col-md-7">
                    <h4>Hola</h4>
                    <br />
                    <h3>{usuario.name}</h3>
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
              ) : (
                <h1>Nada</h1>
              )}
              <div className="row centrar">
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
