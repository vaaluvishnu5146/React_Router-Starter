import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Products} path="/products" />
        <Route Component={ProductDetails} path="/product/:productId" />
        <Route Component={Contact} path="/contact" />
      </Routes>
    </>
  );
}

export default App;
