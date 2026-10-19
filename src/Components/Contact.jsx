import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Contact form will be connected soon.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="Contact"
      className="border-t border-gray-800 bg-black px-4 py-20 sm:px-6 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Contact <span className="text-blue-400">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a project idea or a professional opportunity? Feel free to send
            me a message. I'd be happy to connect with you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-800 bg-[#141414] p-5 sm:p-8">
          <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="mb-5 w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
          />

          <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="mb-5 w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
          />

          <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Write your message..."
            required
            className="mb-6 w-full resize-y rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
          />

          <button
            type="submit"
            className="flex w-full items-center cursor-pointer justify-center gap-3 rounded-lg bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600">
            Send Message <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
