import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import './styles/style.scss';


export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <HashRouter>
      <NavBar cart={cart} />
      <Routes>
        <Route path="/"
          element={<Home />} />

        <Route path="/shop"
          element={<Shop cart={cart}
            setCart={setCart} />} />
      </Routes>
    </HashRouter>
  );
}