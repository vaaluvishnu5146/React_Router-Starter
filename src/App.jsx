import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <h1>Header</h1>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/contact"}>Contact Us</Link>
      </div>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Products} path="/products" />
        <Route Component={Contact} path="/contact" />
      </Routes>
      <h1>Footer</h1>
    </>
  );
}

export default App;
