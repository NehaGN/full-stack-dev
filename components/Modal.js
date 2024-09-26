import { useState } from 'react';

export default function Modal({ showModal, setShowModal }) {
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
    countryCode: '+1',
    consent: false,
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const countryCodes = [
    { code: '+1', country: 'USA (+1)' },
    { code: '+971', country: 'UAE (+971)' },
    { code: '+44', country: 'UK (+44)' },
    { code: '+91', country: 'India (+91)' },
    { code: '+61', country: 'Australia (+61)' },
    { code: '+81', country: 'Japan (+81)' },
  ];

  return (
    <>
      {showModal && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={(e) => e.target.id === 'modal-overlay' && setShowModal(false)}
        >
          <div className="bg-white rounded-lg p-8 relative mx-auto"
            style={{ maxWidth: 'calc(100vw - 90px)', maxHeight: 'calc(110vh - 90px)', overflowY: 'auto' }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:border-orange-500 border border-transparent rounded-full"
              style={{ padding: '5px', transition: 'all 0.3s ease-in-out' }}
            >
              ✕
            </button>

            {/* Modal Header */}
            <h2 className="text-xl font-bold mb-4 text-left text-black">Schedule a call at a time that suits you</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date and Time Selection */}
              <div className="flex space-x-4 mb-6">
                <div className="w-1/2">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Select a date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                    style={{ color: 'black' }}
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Select a time</label>
                  <div className="flex flex-wrap gap-2">
                    {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'].map((time) => (
                      <button
                        type="button"
                        key={time}
                        className={`border py-2 px-4 rounded-lg ${selectedTime === time ? 'bg-teal-500 text-white' : 'border-teal-500 text-teal-500'} hover:bg-teal-500 hover:text-white`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Fields with Background and Alignment */}
              <div className="bg-[#f0fafa] p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Left Column: Full Name, Email, Phone */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Full name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      className="border border-gray-300 p-2 rounded-lg w-full"
                      required
                    />
                    <label className="block mb-2 mt-4 text-sm font-medium text-gray-700">Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email address"
                      className="border border-gray-300 p-2 rounded-lg w-full"
                      required
                    />
                    <label className="block mb-2 mt-4 text-sm font-medium text-gray-700">Phone number</label>
                    <div className="flex">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="border border-gray-300 p-2 rounded-lg w-1/4 mr-2 appearance-none"
                        style={{ color: 'black' }}
                        required
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code} className="text-black">
                            {country.country}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone number"
                        className="border border-gray-300 p-2 rounded-lg w-3/4"
                        required
                      />
                    </div>
                  </div>

                  {/* Right Column: Call Notes, Consent, and Submit */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Call notes</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Call notes"
                      className="border border-gray-300 p-2 rounded-lg w-full text-gray-900"
                      rows="4"
                      required
                    />
                    <div className="mt-4">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          className="border border-gray-300 rounded mr-2"
                          required
                        />
                        <span className="text-sm text-gray-700">I consent to my details being processed in line with the <a href="#" className="text-teal-500 underline">privacy policy</a>.</span>
                      </label>
                    </div>
                    <div className="text-right mt-4">
                      <button
                        type="submit"
                        className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600"
                      >
                        Schedule my call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
