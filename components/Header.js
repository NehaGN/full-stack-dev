// components/Header.js
"use client";

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; 
import { BiWorld } from 'react-icons/bi'; // For language icon
import Modal from './Modal'; 

export default function Header() {
  const [showModal, setShowModal] = useState(false); 
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN'); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setIsDropdownOpen(false); 
  };

  return (
    <header className="w-full bg-gray-100 shadow-sm fixed top-0 left-0 z-50">
      {/* Sub Header */}
      <div className="w-full bg-gray-100 py-0.01">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-3">
          <div className="flex space-x-4 items-center">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-gray-400"
              >
                <BiWorld className="text-gray-400" />
                <span>{language}</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-20 bg-white border border-gray-150 rounded shadow-md z-10">
                  <ul className="text-left">
                    <li
                      className="hover:bg-gray-150 px-0 py-0 cursor-pointer"
                      onClick={() => handleLanguageChange('EN')}
                    >
                      EN
                    </li>
                    <li
                      className="hover:bg-gray-150 px-2 py-1 cursor-pointer"
                      onClick={() => handleLanguageChange('FR')}
                    >
                      FR
                    </li>
                    <li
                      className="hover:bg-gray-100 px-2 py-1 cursor-pointer"
                      onClick={() => handleLanguageChange('ES')}
                    >
                      ES
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <span className="text-gray-400">Chat to Sales</span>
            <span className="text-gray-400">Support</span>
          </div>

          <div className="flex space-x-4 items-center">
            {/* Dark/Light Mode Toggle */}
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? (
                <FaMoon className="text-gray-400" />
              ) : (
                <FaSun className="text-gray-400" />
              )}
            </button>
            <span className="text-black">Log in</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      {/* <div className="w-full bg-teal-100 rounded-3xl py-2 max-w-6xl max-auto"> */}
      <div className="bg-teal-100 rounded-3xl shadow-lg p-50 max-w-5xl mx-auto py-3 relative">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-4 ">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="text-teal-600 font-bold text-2xl">
              <span className="text-white bg-teal-500 px-2 py-1 rounded-full">FLOW</span>SPARK
            </div>

            {/* Navigation Links */}
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-teal-500">
                Features
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-500">
                Industries
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-500">
                Pricing
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-500">
                Resources
              </a>
            </nav>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-teal-500 text-white font-bold py-2 px-4 rounded-full"
            >
              Schedule a call
            </button>
            <button className="border border-teal-500 text-teal-500 font-bold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white">
              Free trial
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </header>
  );
}
