import React from "react";
import './Testimonials.css';

function Testimonials() {
  return (
    <>
      <h1 className="text-6xl md:text-8xl font-extrabold text-white">
        Testimonials
      </h1>
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Watch Our Story</h2>
          <div className="mt-6">
            <iframe
              className="w-full h-64 md:h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/your-video-id"
              title="Our Story Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
