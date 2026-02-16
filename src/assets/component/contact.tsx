// src/components/Contact.tsx

import Reveal from './Reveal';
const Contact = () => {
  return (
    <Reveal>
    <section id="contact" className="p-10 ">
      <h2 className="text-3xl font-semibold text-center mb-6 text-amber-100">Contact Me</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
      <label className="block text-lg mb-2 text-amber-100">Name:</label>
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg text-amber-100 " />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2 text-amber-100">Email:</label>
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg text-amber-100" />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2 text-amber-100">Message:</label>
          <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 text-amber-100 rounded-lg" />
        </div>
        <button type="submit" className="w-full p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-600 ">Send</button>
      </form>
    </section>
    </Reveal>
  );
};

export default Contact;