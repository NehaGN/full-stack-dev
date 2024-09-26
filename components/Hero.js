"use client";
import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      consent: e.target.checked,
    });
  };

  return (
    <section className="bg-[#ffffff] py-36">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left Side: Text and Image */}
        <div className="text-left lg:text-left space-y-4">
           <h1 className="text-6xl font-Isidora_Sans_Alt text-gray-1200">FlowSpark</h1>
           <h2 className="text-2xl font-Basic_Sans text-gray-700">DIGITAL MARKETING SOLUTIONS</h2>
          <p className="text-lg text-gray-600">
            We believe that marketing shouldn't be a headache, 
            so we've crafted a platform that's super easy to use
            but doesn't skimo on the powerful stuff.
          </p>
          <img
            src="..//assets/photo.png" 
            alt="Digital Marketing Illustration"
            className="w-auto h-auto pl-20 ml-20"
          />
        </div>

        {/* Right Side: Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name ? "border-red-500" : ""
                }`}
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? "border-red-500" : ""
                }`}
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>

            {/* Checkbox for Consent */}
            <div className="mb-4 flex items-start">
              <input
                id="consent"
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <label
                htmlFor="consent"
                className="ml-2 block text-gray-700 text-sm"
              >
                I consent to my details being processed in line with the{" "}
                <a href="#" className="text-blue-500 underline">
                  privacy policy
                </a>
              </label>
            </div>
            {errors.consent && (
              <p className="text-red-500 text-xs italic">{errors.consent}</p>
            )}

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                type="button"
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-lg"
              >
                Book your demo
              </button>
              <button
                type="submit"
                className="border border-teal-500 text-teal-500 font-bold py-2 px-6 rounded-lg hover:bg-teal-500 hover:text-white"
              >
                Start a free trial
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Free 14-day trial. Cancel anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
