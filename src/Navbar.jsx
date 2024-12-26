import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/logo/logo2.png";

function Navbar() {
  return (
    <nav className="barra-navegacion">
      {/* Logo */}
      <div className="logo-navegacion">
        <Link to="/">
          <img src={logo} alt="Logo Handin" className="logo-imagen" />
        </Link>
      </div>

      {/* Lista de navegación */}
      <ul className="lista-navegacion">
        <li>
          <Link to="/" className="enlace-navegacion">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/nosotros" className="enlace-navegacion">
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/servicios" className="enlace-navegacion">
            Servicios
          </Link>
        </li>
        <li>
          <Link to="/contacto" className="enlace-navegacion">
            Contacto
          </Link>
        </li>
      </ul>

      {/* Botones */}
      <div className="botones-navegacion">
        <Link to="/login" className="btn-iniciar-sesion">
          Iniciar Sesión
        </Link>
        <Link to="/register" className="btn-registrarse">
          Registrarse
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
