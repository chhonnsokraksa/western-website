import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setMessage("");
  }

  return (
    <section className="w-full bg-gray-100 py-12 flex-1">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-[#163462] mb-6">
          Contact
        </h1>

        <form onSubmit={handleSubmit} className="max-w-3xl space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white text-gray-800 placeholder-gray-400 border border-gray-300 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#163462]"
              required
            />
          </div>

          <div>
            <textarea
              rows={4}
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white text-gray-800 placeholder-gray-400 border border-gray-300 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#163462]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold py-2.5 rounded text-sm cursor-pointer"
          >
            Send
          </button>

          {submitted && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded px-4 py-2.5">
              Thank you! Your message has been received.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}