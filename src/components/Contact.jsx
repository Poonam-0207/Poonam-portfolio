// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-slate-800 text-slate-100">
      <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-slate-200/90 mb-4">
          Interested in working together? Send a message or reach me at <strong>poonamcvn@gmail.com</strong> or <strong>+91-7411792602</strong>.
        </p>

        {/* Simple contact form (client-only) */}
        <form action="https://formspree.io/f/your-form-id" method="POST" className="grid gap-4">
          <input name="name" required placeholder="Your name" className="px-4 py-3 rounded-lg bg-white/6 backdrop-blur-sm" />
          <input name="email" required type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-white/6 backdrop-blur-sm" />
          <textarea name="message" rows="5" required placeholder="Message" className="px-4 py-3 rounded-lg bg-white/6 backdrop-blur-sm" />
          <button type="submit" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-slate-900 rounded-full font-semibold">Send Message</button>
        </form>
      </div>
    </section>
  );
}
