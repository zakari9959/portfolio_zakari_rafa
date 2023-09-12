'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';
function ContactForm() {
  const [state, handleSubmit] = useForm("xaygedpq");
  if (state.succeeded) {
      return <p>Merci pour votre message, je vous recontacterai dans les plus brefs délais.</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='contactform'>
      <label htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label>Message</label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>
    </form>
  );
}
export default ContactForm;