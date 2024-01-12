import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./pages/Clients";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Cameras from "./pages/Equipments/Cameras";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Clients />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/Equipments/cameras" element={<Cameras />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
