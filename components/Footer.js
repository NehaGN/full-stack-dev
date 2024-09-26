"use client";

import { useState } from 'react';
import Modal from './Modal'; // Import the modal component

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const [showModal, setShowModal] = useState(false); 

  return (
    <>
      <footer className="bg-gray-800 text-white py-10 rounded-t-3xl">
        {/* Rounded top for the curvy outer layer */}
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
            {/* Product Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Overview</a></li>
                <li><a href="#" className="hover:underline">Key Features</a></li>
                <li><a href="#" className="hover:underline">Integrations</a></li>
                <li><a href="#" className="hover:underline">Customization Options</a></li>
                <li><a href="#" className="hover:underline">AI-led Insights</a></li>
              </ul>
            </div>

            {/* Academy Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Academy</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Training programme</a></li>
                <li><a href="#" className="hover:underline">Webinars</a></li>
                <li><a href="#" className="hover:underline">Education blog</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Support Center</a></li>
                <li><a href="#" className="hover:underline">Account login</a></li>
              </ul>
              <button
                onClick={() => setShowModal(true)} // Show modal when clicked
                className="bg-teal-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-teal-600"
              >
                Schedule a call
              </button>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Partnerships</a></li>
                <li><a href="#" className="hover:underline">Media + Press</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-8 flex flex-col items-center space-y-4">
            {/* Logo */}
            <div className="text-teal-600 font-bold text-2xl">
              <span className="text-white bg-teal-500 px-2 py-1 rounded-full">FLOW</span>SPARK
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 text-teal-700">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>

            {/* Terms & Privacy */}
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:underline">Terms of service</a>
              <a href="#" className="hover:underline">Privacy policy</a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 FlowSpark Digital LLC
            </div>
          </div>

          {/* Modal Component */}
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </footer>
    </>
  );
}
