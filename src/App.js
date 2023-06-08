import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import NewProduct from "./components/NewProduct";
import Contact  from "./components/Contact";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import './index.css';


const App = ()=> {
  return (
  <>
    <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
    </>
    
        );
}

export default App;
