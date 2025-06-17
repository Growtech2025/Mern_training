import { useState } from 'react';
import { products } from './utilis/Products.jsx';
import Card from './components/Cards.jsx';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import Navbar from "./components/Navbar.jsx";

function App() {
  const [product] = useState(products);

  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home product={product} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
