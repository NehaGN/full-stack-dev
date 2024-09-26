"use client";
import { useState, useEffect } from "react";

const images = [
  "https://picsum.photos/id/1011/460/300",
  "https://picsum.photos/id/1021/460/300",
  "https://picsum.photos/id/1031/460/300",
];

export default function FeaturesWithCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Control for hover

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  const handlePrevious = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="bg-teal-50 rounded-3xl shadow-lg p-10 max-w-5xl mx-auto py-12 relative">
      {/* Grid layout for text and carousel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Text */}
        <div className="space-y-4 text-left">
          <h2 className="text-3xl font-bold text-gray-900">FlowSpark features</h2>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <div className="w-1 h-6 bg-teal-500"></div>
              <div>
                <strong className="text-gray-900">Effortless interface:</strong>
                <p className="text-gray-600">Simplify your marketing</p>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1 h-6 bg-teal-500"></div>
              <div>
                <strong className="text-gray-900">Seamless connections:</strong>
                <p className="text-gray-600">Total sync with your tools</p>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1 h-6 bg-teal-500"></div>
              <div>
                <strong className="text-gray-900">Tailored experience:</strong>
                <p className="text-gray-600">Customise with ease</p>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1 h-6 bg-teal-500"></div>
              <div>
                <strong className="text-gray-900">All-in-One platform:</strong>
                <p className="text-gray-600">Unified marketing mastery</p>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1 h-6 bg-teal-500"></div>
              <div>
                <strong className="text-gray-900">Smart insights:</strong>
                <p className="text-gray-600">AI-powered marketing intelligence</p>
              </div>
            </li>
          </ul>
          <p className="text-gray-600 text-sm">
            Experience simplicity with our user-friendly interface, designed for
            effortless navigation. Transform complex tasks into simple actions,
            enhancing productivity and strategic focus.
          </p>
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">
            See more features
          </button>
        </div>

        {/* Right Side: Carousel */}
        <div
          className="relative h-64 flex flex-col items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Slide Counter and Arrows */}
          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={handlePrevious}
              className="border border-teal-500 text-teal-500 font-bold py-2 px-4 rounded-lg hover:bg-teal-500 hover:text-white"
            >
              ←
            </button>

            <div className="text-center text-gray-800 font-semibold">
              {currentIndex + 1} / {images.length}
            </div>

            <button
              onClick={handleNext}
              className="border border-teal-500 text-teal-500 font-bold py-2 px-4 rounded-lg hover:bg-teal-500 hover:text-white"
            >
              →
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-teal-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
