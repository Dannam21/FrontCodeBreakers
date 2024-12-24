import React from 'react';
import './Home.css'; 
import video from './assets/videos/hero-background.mp4';

function Home() {
  return (
    <div className="home-container">
      {/* Video de fondo */}
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Contenido principal */}
      <div className="home-content">
        <h1>Bienvenido a mi página</h1>
        <p>Este es un ejemplo con video de fondo.</p>
      </div>
    </div>
  );
}

export default Home;
