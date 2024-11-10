

"use client";  

import React, { useState, ChangeEvent, FormEvent } from "react";

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", { email, message });
  };

  return (
    <section className="py-32 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-3 bg-gray-700 text-white rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              className="w-full p-3 bg-gray-700 text-white rounded-lg"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
