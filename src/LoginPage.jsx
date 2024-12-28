import React, { useState } from 'react';
import './LoginPage.css';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const userData = { email, password };
    
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Credenciales incorrectas');
        return;
      }

      const data = await response.json();
      const token = data.token;  

      localStorage.setItem('token', token);
      
      navigate('/dashboard');  
    } catch (error) {
      setError('Hubo un error al iniciar sesión');
      console.error(error);
    }
  };

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="login-title">Inicia Sesión</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}

        <motion.button
          type="submit"
          className="btn-login"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Iniciar Sesión
        </motion.button>
      </form>

      <p className="register-link">
        ¿No tienes una cuenta?{' '}
        <Link to="/register" className="register-link-text">Regístrate aquí</Link>
      </p>
    </motion.div>
  );
}

export default LoginPage;
