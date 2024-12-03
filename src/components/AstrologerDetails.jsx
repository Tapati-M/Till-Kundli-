import React from "react";

const AstrologerDetails = ({ astrologer, onBack }) => {
  if (!astrologer) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        background: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
        backdropFilter: "blur(5px)", // Blurred background
        WebkitBackdropFilter: "blur(5px)", // For Safari
      }}
    >
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onBack}
        >
          ✖
        </button>

        <div className="flex flex-col items-center">
          <img
            src={astrologer.avatar}
            alt={astrologer.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <h1 className="text-2xl font-bold mt-4">{astrologer.name}</h1>
          <p className="text-gray-600 mt-2">{astrologer.expertise}</p>
          <p className="text-gray-500 mt-1">Languages: {astrologer.languages}</p>
          <p className="text-gray-500 mt-1">Experience: {astrologer.experience} Years</p>
          <p className="text-black font-semibold mt-1">Rate: ₹{astrologer.rate}/min</p>
          <p className="text-gray-600 mt-4">{astrologer.detail}</p>
          <div className="flex space-x-4 mt-6">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
              onClick={() => window.open(astrologer.chatLink, "_blank")}
            >
              Chat
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => (window.location.href = `tel:${astrologer.phone}`)}
            >
              Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologerDetails;
