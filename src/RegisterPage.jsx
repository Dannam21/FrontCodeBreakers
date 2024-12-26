import React, { useState } from "react";
import "./RegisterPage.css";

function RegisterPage() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    alert("Registro exitoso");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Crear Cuenta</h2>

        <label htmlFor="nombres">Nombres</label>
        <input
          type="text"
          id="nombres"
          name="nombres"
          placeholder="Ingresa tus nombres"
          value={formData.nombres}
          onChange={handleChange}
          required
        />

        <label htmlFor="apellidos">Apellidos</label>
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          placeholder="Ingresa tus apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu correo"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Crea una contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirma tu contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-register">Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterPage;
