import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow pt-16 px-4 sm:px-6 lg:px-8"> {/* Adjust padding as needed */}
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
