import { useState } from 'react';
import { products } from './utilis/Products.jsx';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import Navbar from "./components/Navbar.jsx";
import MyCart from './pages/MyCart.jsx';

function App() {
  const [product] = useState(products);
  const [cartItem, setCartItem] = useState([]);
  return (

    <div>
    <Navbar cartItem={cartItem} />
      <Routes>
        <Route path="/" element={<Home product={product} setCartItem={setCartItem} cartItem={cartItem}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mycart" element={<MyCart cartItem={cartItem} setCartItem={setCartItem}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
