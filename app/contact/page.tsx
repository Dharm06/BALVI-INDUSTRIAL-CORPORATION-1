export default function ContactPage({
  searchParams,
}: {
  searchParams: { product?: string };
}) {
  const product = searchParams?.product;

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Product Inquiry</h1>

      {product && (
        <p className="mb-4 text-blue-600">
          Inquiry for: <strong>{product}</strong>
        </p>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Inquiry submitted successfully!");
        }}
        className="space-y-4"
      >
        <input
          name="name"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="phone"
          placeholder="Your Phone"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-3 rounded"
          rows={4}
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
