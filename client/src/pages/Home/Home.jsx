// Home.jsx
import React, { useState, useEffect } from "react";
import Blob from "../../svg/Blobbie/Blobbie";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleEsc);
    } else {
      window.removeEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen]);

  const ContactModal = ({ closeModal }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // TODO:API call)
      console.log("Form Data Submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      closeModal();
    };

    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={handleOverlayClick}
        aria-modal="true"
        role="dialog"
        aria-labelledby="contact-modal-title"
      >
        <div className="bg-gray-800 rounded-lg w-11/12 max-w-lg p-6 relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl font-bold focus:outline-none"
            aria-label="Close Modal"
          >
            &times;
          </button>

          <h2 id="contact-modal-title" className="text-2xl mb-6 text-white">
            Get in Touch
          </h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-pink-500 text-black rounded-lg hover:bg-cyan-400 transition transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-x-hidden bg-black">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        {/* HERO SECTION */}
        <section className="hero-section flex items-center justify-center relative w-full min-h-screen  pt-16">
          <div className="absolute top-10 inset-x-0 flex items-center justify-center">
            <Blob className="w-screen h-screen animate-spin-scale" />
          </div>

          <div className="hero-content relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-8xl font-extrabold text-white">
              <span className="md:text-7xl font-extrabold text-white italic">Misty</span>WebWorx
            </h1>

            <div className="white-stripe"></div>

            <p className="text-3xl md:text-4xl text-gray-300 mt-4">
              Empowering Your Digital Presence.
            </p>

            <p className="text-l md:text-2xl text-gray-300 mt-4">
              Innovative, modern, and affordable web solutions tailored to elevate your business online.
            </p>

            <button
              className="bg-cmykMagenta text-white mt-8 py-3 px-6 rounded-md transition duration-300 ease-in-out transform shadow-md shadow-cmykCyan hover:shadow-cmykMagenta hover:bg-cyan-400 hover:text-black hover:cursor-pointer"
            >
              Get Started
            </button>

          </div>
        </section>

        {/* OUR INNOVATIVE SOLUTIONS SECTION */}
        <section className="py-20 bg-black text-white text-center w-screen relative bottom-10 border-4 border-cmykMagenta">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Our Innovative Solutions</h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            At ModularWebWorx, we specialize in creating dynamic and responsive websites that not only look stunning but also drive results. Our team of experts is dedicated to delivering solutions that align with your business objectives.
          </p>
        </section>

        {/* FEATURES SECTION */}
        <section className="features-section py-20 bg-black text-white text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">What We Offer</h2>
          <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="feature-card border-4 border-cmykMagenta bg-gray-800 rounded-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-2xl mb-4">Custom Web Development</h3>
              <p className="text-gray-400">
                Tailored websites built to meet your specific business requirements, ensuring optimal performance and user experience.
              </p>
            </div>
            <div className="feature-card border-4 border-cmykMagenta bg-gray-800 rounded-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-2xl mb-4">E-commerce Solutions</h3>
              <p className="text-gray-400">
                Comprehensive e-commerce platforms that drive sales and enhance customer engagement with seamless integrations and intuitive designs.
              </p>
            </div>
            <div className="feature-card border-4 border-cmykMagenta bg-gray-800 rounded-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-2xl mb-4">SEO & Digital Marketing</h3>
              <p className="text-gray-400">
                Boost your online presence and reach your target audience effectively with our expert SEO and digital marketing strategies.
              </p>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="cta-section py-20 bg-black text-white text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Transform Your Online Presence?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Partner with ModularWebWorx to create a digital experience that not only captivates but also converts visitors into loyal customers.
          </p>
          <button
            className="bg-cmykMagenta text-white mt-8 py-3 px-6 rounded-md transition duration-300 ease-in-out transform shadow-md shadow-cmykCyan hover:shadow-cmykMagenta hover:bg-cyan-400 hover:text-black hover:cursor-pointer"
          >
            Get Started
          </button>

        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section py-20 bg-black text-white text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Get in Touch</h2>
          <button
            onClick={openModal} // Add this line to open the modal
            className="bg-cmykMagenta text-white mt-8 py-3 px-6 rounded-md transition duration-300 ease-in-out transform shadow-md shadow-cmykCyan hover:shadow-cmykMagenta hover:bg-cyan-400 hover:text-black hover:cursor-pointer"
          >
            Contact Us
          </button>
        </section>
      </main>

      {/* Render the ContactModal if isModalOpen is true */}
      {isModalOpen && <ContactModal closeModal={closeModal} />}
    </div>
  );
}

export default Home;
