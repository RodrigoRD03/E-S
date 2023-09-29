import React from "react";
import { Navbar, Home, Catalogue, About, Gallery, Contact, LineBuy } from "./components";
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <LineBuy id="Catalogue"/>
      <Catalogue />
      <About />
      <Gallery /> 
      <Contact />
    </div>
  );
};

export default App
