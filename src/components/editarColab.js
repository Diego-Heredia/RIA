import React, { useEffect } from "react";
import Navbar from "./navbar";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditarColab = () => {
  const navigate = useNavigate();
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
    const otroRes = document.querySelector("#Resultado");
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i]);
    }

    for (let i = 0; i < data.length; i++) {
      otroRes.innerHTML += ` <div class='col-md-3 '>
      <div class='card centrar p-3'>
        <img src='https://images.unsplash.com/photo-1672394423014-e0354d75b123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80' class='img-fluid' id='img-card'>
        <h3>${arr[i].Nombre}</h3>
        <h4>${arr[i].Apellido_pat + " " + arr[i].Apellido_mat}</h4>
        <h6>${arr[i].Correo}</h6>
        <h6>${arr[i].Telefono}</h6>
        <svg class='editar' value='${
          arr[i].ID
        }' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
        </div>
     </div>`;
    }
    console.log(arr);
    const editIcon = document.querySelectorAll(".editar");
    editIcon.forEach((item) => {
      item.addEventListener("click", () => {
        console.log("Hola ");
        const idColab = item.getAttribute("value");
        console.log(idColab);
        var arrColab = [];
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].ID == idColab) {
            arrColab.push(arr[i]);
          }
        }
        console.log("Colaborador identificado:  ", arrColab);
        Swal.fire({
          width: 1100,
          title: "<strong>EDITAR <p>Colaborador</p></strong>",
          icon: "warning",
          html: `<h4>Seguro que editar este colaborador?</h4><hr>
                   <h4>${arrColab[0].Nombre}</h4>
                   <h4>${
                     arrColab[0].Apellido_pat + " " + arrColab[0].Apellido_mat
                   }</h4>
                   <h4>${arr[0].Correo}</h4>
        <h4>${arr[0].Telefono}</h4>
                `,

          text: "Something went wrong!",
          showCancelButton: true,
          cancelButtonText: "Cancelar",
          confirmButtonText: "Guardar colaborador",
        }).then(async (result) => {
          if (result.isConfirmed) {
            Swal.fire("Borrado!", `Has borrado el producto.`, "success");
            const options = {
              method: "DELETE",
              mode: "cors",
            };
            const response = await fetch(
              `http://localhost:5500/prod-eliminar/`,
              options
            );
            navigate("/editarColab");
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              "Cancelado",
              "No se ha borrado ningun archivo :)",
              "error"
            );
          }
        });
      });
    });
  };

  useEffect(() => {
    colab();
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
          </div>
          <div className="container-fluid mt-5 mb-5">
            <div className="row px-2 gy-4" id="Resultado"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarColab;
