"use client";
import { useState } from 'react';
import Modal from './Modal'; 

export default function CallToAction() {
    const [showModal, setShowModal] = useState(false); 
    return (
      <div className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Want to see how we can help?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
          Ready to transform your marketing? Book a demo or start your free trial today
          and see firsthand how we can make your marketing efforts more effective and
          enjoyable!
        </p>
  
        {/* Buttons */}
        <div className="flex justify-center space-x-4 mb-4">
          <button  onClick={() => setShowModal(true)} 
          className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600">
            Schedule a call
          </button>
          <button className="border border-teal-500 text-teal-500 py-2 px-6 rounded-lg hover:bg-teal-500 hover:text-white">
            Start a free trial
          </button>
        </div>
  
        {/* Small note */}
        <p className="text-sm text-gray-500">
          Free 14-day trial. Cancel anytime.
        </p>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    );
  }
  