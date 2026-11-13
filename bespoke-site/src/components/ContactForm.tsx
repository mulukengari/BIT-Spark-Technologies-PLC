"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="content-card" role="status">
        <h2>This demo form did not send your enquiry.</h2>
        <p>
          Please call BIT Spark Technologies at{" "}
          <a href="tel:+251929316976">+251 929 316 976</a> to get in touch.
        </p>
        <button
          className="button button-primary"
          type="button"
          onClick={() => setSubmitted(false)}
        >
          Return to the contact form
        </button>
      </div>
    );
  }

  return (
    <form className="form-grid" onSubmit={submit}>
      <div className="field">
        <label htmlFor="contact-name">Full name</label>
        <input id="contact-name" name="name" required placeholder="Your name" />
      </div>
      <div className="field">
        <label htmlFor="contact-email">Work email</label>
        <input
          id="contact-email"
          name="email"
          required
          type="email"
          placeholder="name@company.com"
        />
      </div>
      <div className="field">
        <label htmlFor="contact-phone">Phone number</label>
        <input id="contact-phone" name="phone" type="tel" placeholder="+251 ..." />
      </div>
      <div className="field">
        <label htmlFor="contact-service">Service</label>
        <select id="contact-service" name="service" required defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option>Cloud and infrastructure</option>
          <option>Networking and security</option>
          <option>Software development</option>
          <option>Hardware supply</option>
          <option>Technical support</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" required placeholder="How can we help?" />
      </div>
      <div className="field full">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your requirements"
        />
      </div>
      <p className="field full">
        This demonstration form does not transmit or store your information.
        Call us to send an enquiry.
      </p>
      <div className="field full">
        <button className="button button-primary" type="submit">
          Preview enquiry form response
        </button>
      </div>
    </form>
  );
}