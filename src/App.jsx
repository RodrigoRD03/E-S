import React from "react";
import { Navbar, Home, Catalogue, About, Gallery, Contact, LineBuy, LineCaution } from "./components";
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <LineBuy id="Catalogue"/>
      <Catalogue />
      <LineCaution id="About"/>
      <About />
      <LineBuy id="Gallery"/>
      <Gallery /> 
      <Contact />
    </div>
  );
};

export default App
