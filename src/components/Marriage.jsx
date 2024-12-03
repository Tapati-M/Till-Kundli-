import React from "react";
import { bgmarriage } from "../assets"; // Assuming this is the path to your background image
import { useNavigate } from "react-router-dom";

const Marriage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-16">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src={bgmarriage} // Replace with the actual background image URL
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold uppercase mb-4">
          Kundali Matching - Horoscope Matching for Marriage Instant!
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl leading-relaxed mb-8">
          Kundali Matching for marriage is an easy and most accurate way to match Kundalis of the
          prospective bride and groom anytime and anywhere. Horoscope Matching or Kundali Milan is
          an ancient method of Vedic Astrology for the compatibility analysis between couples.
          Online Kundli Matching as per Hindu Vedic Astrology is done by the Ashtakoota method of
          Kundli Guna Milan. In a Hindu marriage, a good Gun Milan score is critical for a happy,
          long-term, and successful married life.
        </p>

        {/* Button to navigate to "/match" */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/match")}
            className="bg-gradient-to-r from-sky-400 to-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
          >
            MATCH KUNDLI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marriage;
