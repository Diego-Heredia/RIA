import React, { useEffect } from "react";
import Navbar from "./navbar";

const EditarColab = () => {
  const options = {
    method: "GET",
    mode: "cors",
  };
  const colab = async () => {
    const response = await fetch(
      "http://localhost:3001/api/colaborador",
      options
    );
    const data = await response.json();
    console.log(data[0]);
    const info = document.querySelector(".Colab");
    info.innerHTML += `ID: ${data[0].ID}<br />Nombre: ${data[0].Nombre}`;
  };
  useEffect(() => {
    colab();
  }, []);
  return (
    <div className="fluid">
      <Navbar></Navbar>
      <div className="Colab"></div>
    </div>
  );
};

export default EditarColab;
