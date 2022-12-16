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
    console.log(data);
  };
  useEffect(() => {
    console.log("Hola");
    colab();
  }, []);
  return (
    <div className="fluid">
      <Navbar></Navbar>
    </div>
  );
};

export default EditarColab;
