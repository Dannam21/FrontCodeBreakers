import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import logo from './assets/logo/logo2.png';


function Navbar() {

  return (
    <nav className="navbar">
      {/* Logo en el lado izquierdo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Lista de navegación */}
      <ul className="navbar-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="navbar-buttons">
        <Link to="/login" className="btn-login">Iniciar Sesión</Link>
        <Link to="/register" className="btn-register">Registrarse</Link>
      </div>
    </nav>
  );
}

export default Navbar;
