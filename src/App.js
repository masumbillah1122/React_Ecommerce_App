import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from './components/Header';
import Home from './components/Home';
import Product from "./components/Product";
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
