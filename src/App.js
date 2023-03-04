import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  console.log(show);
  return (
    <BrowserRouter>
      {show && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error show={show} setShow={setShow}/>} />
      </Routes>
      {show && <Footer show={show} setShow={setShow}/>}
    </BrowserRouter>
  );
}

export default App;
