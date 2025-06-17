
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
