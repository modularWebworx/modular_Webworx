import React from "react";

function Contact() {
  return (
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white flex flex-col items-center">
  <header class="text-center mt-10">
    <h1 class="text-4xl font-bold tracking-wide">Let’s Connect</h1>
    <p class="mt-4 text-xl opacity-75">Reach us anytime, anywhere.</p>
  </header>

  <section class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
    <div class="space-y-6">
      <div>
        <h2 class="text-2xl font-semibold">Email</h2>
        <a href="mailto:contact@yourdomain.com" class="text-blue-400 hover:underline">contact@yourdomain.com</a>
      </div>
      <div>
        <h2 class="text-2xl font-semibold">Phone</h2>
        <a href="tel:+1234567890" class="text-blue-400 hover:underline">+1 (901) 626-3961</a>
      </div>
      <div>
        <h2 class="text-2xl font-semibold">Address</h2>
        <p>PO Box 222</p>
        <p>Heber Springs,AR 72534</p>
      </div>
    </div>

    <div class="space-y-6">
      <button class="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-all">
        Instant Message Us
      </button>
      <button class="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-all">
        Start a Video Call
      </button>
      <button class="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg transition-all">
        Send a Voice Message
      </button>
    </div>
  </section>

  <section class="mt-10 w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4">Send Us a Message</h2>
    <form class="space-y-4">
      <input type="text" placeholder="Your Name" class="w-full p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="email" placeholder="Your Email" class="w-full p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <textarea placeholder="Your Message" class="w-full p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg text-white font-bold">Submit</button>
    </form>
  </section>
</div>

  );
}

export default Contact;
