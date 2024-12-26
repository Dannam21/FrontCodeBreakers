import React from "react";
import { motion } from "framer-motion";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="contact-title"
        >
          Contáctanos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="contact-description"
        >
          Estamos aquí para ayudarte. Escríbenos y nos pondremos en contacto contigo.
        </motion.p>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <motion.form
          className="contact-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            required
          />

          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
          />

          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>

          <motion.button
            type="submit"
            className="contact-submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar Mensaje
          </motion.button>
        </motion.form>
      </section>

      {/* Additional Info */}
      <section className="contact-info">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="info-title"
        >
          Otras formas de contactarnos
        </motion.h2>
        <motion.ul
          className="info-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <li>📞 Teléfono: +51 123 456 789</li>
          <li>📧 Correo: contacto@handin.com</li>
          <li>📍 Dirección: Lima, Perú</li>
        </motion.ul>
      </section>
    </div>
  );
}

export default ContactPage;
