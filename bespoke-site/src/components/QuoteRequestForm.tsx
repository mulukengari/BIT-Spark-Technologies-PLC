"use client";

import { useState } from "react";

export default function QuoteRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="content-card" role="status">
        <h2>This demo form did not send your quotation request.</h2>
        <p>
          Please call BIT Spark Technologies at{" "}
          <a href="tel:+251929316976">+251 929 316 976</a> to discuss your
          requirements.
        </p>
        <button
          className="button button-primary"
          type="button"
          onClick={() => setSubmitted(false)}
        >
          Return to the request form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="form-grid">
      <div className="field">
        <label htmlFor="quote-name">Full name</label>
        <input id="quote-name" name="name" required />
      </div>
      <div className="field">
        <label htmlFor="quote-company">Company</label>
        <input id="quote-company" name="company" required />
      </div>
      <div className="field">
        <label htmlFor="quote-email">Email</label>
        <input id="quote-email" name="email" type="email" required />
      </div>
      <div className="field">
        <label htmlFor="quote-service">Product or service</label>
        <select id="quote-service" name="service" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Hardware and devices</option>
          <option>Cloud or infrastructure</option>
          <option>Networking</option>
          <option>Cybersecurity</option>
          <option>Software development</option>
          <option>Support and maintenance</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="quote-requirements">Requirements</label>
        <textarea id="quote-requirements" name="requirements" required rows={7} />
      </div>
      <p className="field full">
        This demonstration form does not transmit or store your information.
        Call us to discuss a quotation.
      </p>
      <div className="field full">
        <button className="button button-primary" type="submit">
          Preview quotation form response
        </button>
      </div>
    </form>
  );
}