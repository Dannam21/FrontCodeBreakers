import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay loop muted>
          <source src="/src/assets/videos/hero-background.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        <div className="hero-overlay">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title"
          >
            Handin: Conectamos conocimiento
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hero-description"
          >
            Accede a eventos educativos desde cualquier lugar, en vivo o grabados.
          </motion.p>
          <motion.a
            href="/register"
            className="hero-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Regístrate Ahora
          </motion.a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="features-title">¿Por qué elegir Handin?</h2>
        <div className="feature-grid">
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/src/assets/icons/global.svg"
              alt="Acceso Global"
              className="feature-icon"
            />
            <h3 className="feature-title">Acceso Global</h3>
            <p className="feature-description">
              Conéctate a eventos educativos sin importar tu ubicación.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="/src/assets/icons/certificados.svg"
              alt="Certificados Validados"
              className="feature-icon"
            />
            <h3 className="feature-title">Certificados Validados</h3>
            <p className="feature-description">
              Obtén certificados digitales con QR para validar tu aprendizaje.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src="/src/assets/icons/modalidades.svg"
              alt="Modalidades Flexibles"
              className="feature-icon"
            />
            <h3 className="feature-title">Modalidades Flexibles</h3>
            <p className="feature-description">
              Disfruta eventos presenciales, en vivo o grabados, según tus necesidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="cta-title"
        >
          Únete a nuestra comunidad
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="cta-description"
        >
          Miles de profesionales ya confían en Handin para sus capacitaciones.
        </motion.p>
        <motion.a
          href="/register"
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Comienza Ahora
        </motion.a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Handin. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
