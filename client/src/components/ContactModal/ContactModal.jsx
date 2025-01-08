import React from 'react';

const ContactModal = ({ closeModal }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={handleOverlayClick}>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
                <div className="bg-gray-800 rounded-lg w-11/12 max-w-lg p-6 relative">
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white text-2xl font-bold"
                    >
                        &times;
                    </button>

                    <h2 className="text-2xl mb-6 text-white">Get in Touch</h2>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                            required
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
        </div>
    );
};

export default ContactModal;
