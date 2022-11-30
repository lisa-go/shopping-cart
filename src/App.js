import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import './styles/style.scss';


export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" 
          element={<Home />} />

        <Route path="/shop" 
          element={<Shop />} />

        <Route path="/cart" 
          element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
