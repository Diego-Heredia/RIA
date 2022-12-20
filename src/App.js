import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Land from "./components/land";
import UserProvider from "./userProvider";
import AgregarColab from "./components/agregarColab";
import EditarColab from "./components/editarColab";
import Planeador from "./components/planeador";
import Visita from "./components/visita";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/land" element={<Land />} />
          <Route path="/agregarColab" element={<AgregarColab />} />
          <Route path="/editarColab" element={<EditarColab />} />
          <Route path="/planeador" element={<Planeador />} />
          <Route path="/visita" element={<Visita />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
