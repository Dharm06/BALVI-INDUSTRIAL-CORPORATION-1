"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Inquiry submitted successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Product Inquiry</h1>

      {product && (
        <p className="mb-4 text-blue-600">
          Inquiry for: <strong>{product}</strong>
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Your Phone"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-3 rounded"
          rows={4}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
