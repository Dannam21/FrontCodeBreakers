import React from "react";
import { motion } from "framer-motion";
import "./ServicesPage.css";

function ServicesPage() {
  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="services-title"
        >
          Nuestros Servicios
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="services-description"
        >
          Descubre cómo Handin puede ayudarte a conectarte con el conocimiento que necesitas.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="services-grid">
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/src/assets/icons/presencial.svg"
            alt="Presencial"
            className="service-icon"
          />
          <h3 className="service-title">Eventos Presenciales</h3>
          <p className="service-description">
            Asiste a eventos educativos y conecta con profesionales en persona.
          </p>
        </motion.div>

        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="/src/assets/icons/en-vivo.svg"
            alt="En Vivo"
            className="service-icon"
          />
          <h3 className="service-title">Eventos en Vivo</h3>
          <p className="service-description">
            Participa en eventos en tiempo real desde cualquier lugar.
          </p>
        </motion.div>

        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img
            src="/src/assets/icons/grabados.svg"
            alt="Grabados"
            className="service-icon"
          />
          <h3 className="service-title">Eventos Grabados</h3>
          <p className="service-description">
            Accede a contenido grabado en cualquier momento y lugar.
          </p>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="services-cta">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="cta-title"
        >
          Encuentra el evento perfecto para ti
        </motion.h2>
        <motion.a
          href="/register"
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explora Ahora
        </motion.a>
      </section>
    </div>
  );
}

export default ServicesPage;
