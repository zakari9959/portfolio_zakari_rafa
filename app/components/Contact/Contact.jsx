import React from 'react';
import './Contact.css';
import ContactForm from '../ContactForm/ContatcForm';

const Contact = () => (
  <section id="contact">
    <h2>Me contacter</h2>
    <nav>
      <a href="tel:+33649679500">+33 6 49 67 95 00</a>
      <a href="mailto:zakari.rafa.dev@gmail.com">zakari.rafa.dev@gmail.com</a>
      <ContactForm />
    </nav>
  </section>
);

export default Contact;
