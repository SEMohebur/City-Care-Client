import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">City Care</h3>
          <p className="text-gray-400">
            City Care is a smart public infrastructure reporting system that
            helps citizens report issues and municipal staff resolve them
            efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#features"
                className="hover:text-white transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-white transition-colors"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-white transition-colors"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-3 bg-gray-700 rounded-full hover:bg-blue-600 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-700 rounded-full hover:bg-blue-400 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-700 rounded-full hover:bg-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-700 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} City Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
