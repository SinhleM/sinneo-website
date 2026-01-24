"use client";
import React, { useState } from "react";

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: Integrate with email API or backend
    console.log("Form submitted:", form);
    alert("Thank you! Your message has been sent.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md mx-4 md:mx-0 shadow-xl overflow-hidden animate-fadeIn">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-[#0a1e5e]">
          <h3 className="text-white text-lg font-black uppercase">Contact Us</h3>
          <button 
            onClick={onClose} 
            className="text-white font-bold text-xl hover:text-[#ff5100] transition-colors"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-8 space-y-4">
          <div>
            <label className="block text-gray-700 text-[12px] font-bold mb-1 uppercase">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a1e5e] transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-[12px] font-bold mb-1 uppercase">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a1e5e] transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-[12px] font-bold mb-1 uppercase">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a1e5e] transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff5100] text-white font-black uppercase py-3 hover:cursor-pointer hover:bg-[#0a1e5e] hover:text-[#ff5100] transition-colors active:scale-95"
          >
            Send Message
          </button>
        </form>

        {/* Footer Note */}
        <div className="px-6 py-4 text-center text-[10px] text-gray-500 border-t border-gray-200">
          We will get back to you within 8-24 hours.
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
