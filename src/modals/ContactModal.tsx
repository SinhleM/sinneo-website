"use client";
import React, { useEffect, useState } from "react";

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("sent");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div role="dialog" aria-modal="true" aria-labelledby="contact-modal-title" className="bg-white w-full max-w-md mx-4 md:mx-0 shadow-xl overflow-hidden animate-fadeIn">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-[#0a1e5e]">
          <h3 id="contact-modal-title" className="text-white text-lg font-extrabold uppercase">Contact Us</h3>
          <button 
            onClick={onClose}
            aria-label="Close contact form"
            className="text-white font-semibold text-xl hover:text-[#ff5100] transition-colors"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        {status === "sent" ? (
          <div className="px-6 py-10 text-center" role="status">
            <p className="text-[#0a1e5e] font-extrabold uppercase mb-2">Message sent</p>
            <p className="text-sm mb-6">Thank you. We will get back to you within 8-24 hours.</p>
            <button
              onClick={onClose}
              className="bg-[#ff5100] text-white font-extrabold uppercase px-8 py-3 hover:cursor-pointer hover:bg-[#0a1e5e] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="px-6 py-8 space-y-4">
          {/* Honeypot field, hidden from people and screen readers */}
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <div>
            <label className="block text-gray-700 text-[12px] font-semibold mb-1 uppercase" htmlFor="contact-name">Name</label>
            <input
              autoFocus
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a1e5e] transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-[12px] font-semibold mb-1 uppercase" htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a1e5e] transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-[12px] font-semibold mb-1 uppercase" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
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
            disabled={status === "sending"}
            className="w-full bg-[#ff5100] text-white font-extrabold uppercase py-3 hover:cursor-pointer hover:bg-[#0a1e5e] hover:text-[#ff5100] transition-colors active:scale-95 disabled:opacity-60 disabled:cursor-wait"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "error" && (
            <p role="alert" className="text-sm text-red-700">
              {errorMessage} You can also email us at{" "}
              <a href="mailto:info@sinneogroup.co.za" className="underline">info@sinneogroup.co.za</a>.
            </p>
          )}
        </form>
        )}

        {/* Footer Note */}
        <div className="px-6 py-4 text-center text-[10px] text-gray-500 border-t border-gray-200">
          We will get back to you within 8-24 hours.
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
