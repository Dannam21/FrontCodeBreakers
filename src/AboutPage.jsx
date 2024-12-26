import React from "react";
import { motion } from "framer-motion";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="about-title"
        >
          Acerca de Nosotros
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="about-description"
        >
          En Handin, nuestra misión es conectar a las personas con el conocimiento a través de eventos educativos innovadores y accesibles para todos.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2 className="mission-title">Nuestra Misión</h2>
        <p className="mission-description">
          Ofrecer una plataforma que permita a las personas acceder a eventos educativos, sin importar su ubicación, fomentando el aprendizaje continuo y la colaboración global.
        </p>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <h2 className="vision-title">Nuestra Visión</h2>
        <p className="vision-description">
          Ser líderes en la transformación de la educación digital, proporcionando herramientas y recursos que potencien el desarrollo personal y profesional.
        </p>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2 className="values-title">Nuestros Valores</h2>
        <ul className="values-list">
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="value-item"
          >
            <strong>Innovación:</strong> Fomentamos nuevas ideas para mejorar la experiencia educativa.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="value-item"
          >
            <strong>Accesibilidad:</strong> Creemos en un aprendizaje inclusivo para todos.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="value-item"
          >
            <strong>Colaboración:</strong> Trabajamos juntos para un mejor futuro.
          </motion.li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
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
          Sé parte de nuestra misión de conectar el mundo a través del conocimiento.
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
    </div>
  );
}

export default AboutPage;
