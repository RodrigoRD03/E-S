import React from "react";
import { images } from "../../constants";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="app__navbar">
            <div className="app__navbar-redirections">
                <a href="#Home">Home</a>
                <a href="#Catalogue">Catalogue</a>
                <a href="#About">About</a>
            </div>
            <div className="app__navbar-logo">
                <img src={images.Logo} alt="" />
            </div>
            <div className="app__navbar-redirections">
                <a href="#Gallery">Gallery</a>
                <a href="#Opinion">Opinions</a>
                <a href="#Contact">Contact</a>
            </div>
        </div>
    )
}

export default Navbar