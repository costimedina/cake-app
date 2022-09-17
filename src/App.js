import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Views/Home";
import Contacto from "./Views/Contacto";
import Productos from "./Views/Productos";
import Compra from "./Views/Compra";
import Delivery from "./Views/Delivery";
import NotFound from "./Views/NotFound";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/compra" element={<Compra />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
