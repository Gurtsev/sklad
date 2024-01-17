import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./pages/Clients";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Cameras from "./pages/Equipments/Cameras";
import LoginReg from "./pages/Registrastion/LogIn";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Clients />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/Equipments/cameras" element={<Cameras />} />
          <Route path="/Registration/LogIn" element={<LoginReg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
