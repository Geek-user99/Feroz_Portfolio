import React, {useState} from 'react';
import {WHATSAPP_URL} from '../data/portfolio';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Feroz, my name is ${name.trim()} (${email.trim()}). ${message.trim()}`;
    const waLink = `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="label">Name</span>
          <input
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setSubmitted(false);
            }}
            name="name"
            placeholder="Your name"
            className="mt-2 w-full border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
          />
        </label>
        <label className="block">
          <span className="label">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSubmitted(false);
            }}
            name="email"
            placeholder="you@company.com"
            className="mt-2 w-full border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
          />
        </label>
      </div>
      <label className="block">
        <span className="label">Message</span>
        <textarea
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setSubmitted(false);
          }}
          name="message"
          rows={5}
          placeholder="Tell me about your brand, packaging or campaign..."
          className="mt-2 w-full border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary">
          Send via WhatsApp
        </button>
        {submitted && (
          <p className="label !text-accent" role="status">
            Ready in WhatsApp — complete your message in the new tab.
          </p>
        )}
      </div>
    </form>
  );
}
