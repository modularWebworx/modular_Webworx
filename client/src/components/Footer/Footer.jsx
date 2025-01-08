import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="border-t border-gray-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between">

          {/* Services Section */}
          <div className="mb-6 md:mb-0 md:w-1/5">
            <h3 className="text-base font-bold mb-2 underline">Services</h3>
            <ul>
              <li className="mb-1">
                <Link to="/web-development" className="text-sm text-gray-400 hover:text-cmykYellow transition-colors">
                  Web Development
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/seo-marketing" className="text-sm text-gray-400 hover:text-cmykYellow transition-colors">
                  SEO & Marketing
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/ui-ux-design" className="text-sm text-gray-400 hover:text-cmykYellow transition-colors">
                  UX/UI Design
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/maintenance" className="text-sm text-gray-400 hover:text-cmykYellow transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="mb-6 md:mb-0 md:w-1/5">
            <h3 className="text-base font-bold mb-2 underline">Resources</h3>
            <ul>
              <li className="mb-1">
                <Link to="/about" className="text-sm text-gray-400 hover:text-cmykYellow transition-colors">
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-cmykYellow transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-cmykYellow transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/faq" className="text-sm text-gray-400 hover:text-cmykYellow transition-colors">
                  FAQ
                </Link>
              </li>

            </ul>
          </div>

          {/* Support Section */}
          <div className="mb-6 md:mb-0 md:w-1/5">
            <h3 className="text-base font-bold mb-2 underline">Support</h3>
            <ul>
              <li className="mb-1">
                <Link to="/contact" className="text-sm text-gray-400 hover:text-cmykYellow transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/testimonials" className="text-sm text-gray-400 hover:text-cmykYellow transition-colors">
                  Testimonials
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/support" className="text-sm text-gray-400 hover:text-cmykYellow transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:w-2/7">
            <h3 className="font-bold text-2xl">Connect With Us</h3>
            <div className="flex space-x-3 m-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-sm text-gray-400 hover:text-cmykYellow transition-colors"
              >
                <FaFacebookF className="m-3 w-8 h-8" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-sm text-gray-400 hover:text-cmykYellow transition-colors"
              >
                <FaInstagram className="m-3 w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-sm text-gray-400 hover:text-cmykYellow transition-colors"
              >
                <FaLinkedinIn className="m-3 w-8 h-8" />
              </a>
            </div>

            <div className="text-sm text-gray-400">
              <p>Email ~ <a href="mailto:info@modularwebworx.com" className="hover:text-cmykYellow">info@modularwebworx.com</a></p>
              <p>Phone ~ <a href="tel:+9016263961" className="hover:text-cmykYellow">+1 (901) 626-3961</a></p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-8 pt-4">
          <p className="text-center text-white">
            &copy; {new Date().getFullYear()} ModularWebWorx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
