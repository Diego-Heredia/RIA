import React, { useEffect } from "react";
import Navbar from "./navbar";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import editar from "../img/pen-to-square-solid.svg";

const EditarColab = () => {
  const options = {
    method: "GET",
    mode: "cors",
  };
  var arr = [];
  const colab = async () => {
    const response = await fetch(
      "http://localhost:3001/api/colaborador",
      options
    );
    const data = await response.json();
    console.log(data[0]);
    const table = document.querySelector("#table_prod");
    // info.innerHTML += `ID: ${data[0].ID}<br />Nombre: ${data[0].Nombre}`;
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i]);
      // arr.push(Object.values(data[i]));
    }
    for (let i = 0; i < data.length; i++) {
      table.innerHTML +=
        `</th>` +
        `<td>` +
        arr[i].ID +
        "</td>" +
        "<td>" +
        arr[i].Nombre +
        "</td>" +
        "<td>" +
        arr[i].Apellido_mat +
        " " +
        arr[i].Apellido_pat +
        "</td>" +
        "<td>" +
        arr[i].Correo +
        "</td>" +
        "<td>" +
        arr[i].Telefono +
        "</td>" +
        "<td>" +
        arr[i].Imagen +
        "</td>" +
        // `<td><i class="fa-solid fa-pen-to-square editar" id="${i}tabla"></i></td>` +
        `<td><img class="editar" src='${editar}' /></td>` +
        "</tr>";
    }
    console.log(arr);
  };
  useEffect(() => {
    colab();
    console.log("Hola");
  }, []);
  return (
    <div className="fluid">
      <Navbar></Navbar>
      <div className="Colab">
        <div className="container-fluid px-4">
          <div className="row table_space mt-4">
            <div className="col-md-12 d-flex justify-content-center align-items-center mb-3">
              <Link to="/land">
                <ArrowLeft className="ml-4 regreso" />
              </Link>

              <h3 className="fs-4 text-center m-0 ">Colaboradores</h3>
            </div>

            <div className="col tabla mt-4">
              <table className="table bg-white rounded   table-hover">
                <thead>
                  <tr>
                    <th scope="col" width="50">
                      Id
                    </th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Celular</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Editar</th>
                  </tr>
                </thead>
                <tbody id="table_prod"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarColab;
