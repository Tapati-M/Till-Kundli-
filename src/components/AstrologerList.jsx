import React, { useState } from "react";
import { FaSearch, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import AstrologersData from "../components/AstrologersData";
import AstrologerDetails from "./AstrologerDetails";

const AstrologerList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedAstrologer, setSelectedAstrologer] = useState(null);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={`full-${i}`} />);
    if (halfStar) stars.push(<FaStarHalfAlt key="half" />);
    for (let i = 0; i < emptyStars; i++) stars.push(<FaRegStar key={`empty-${i}`} />);
    return stars;
  };

  const getFilteredAndSortedAstrologers = () => {
    let result = AstrologersData.filter((astrologer) =>
      astrologer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOption === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "experience") {
      result.sort((a, b) => b.experience - a.experience);
    } else if (sortOption === "rate") {
      result.sort((a, b) => a.rate - b.rate);
    }

    return result;
  };

  const filteredAndSortedAstrologers = getFilteredAndSortedAstrologers();

  return (
    <div className="py-8 px-4 md:px-6 lg:px-16">
      <h1 className="text-4xl font-bold mb-6">Consult Astrologers</h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2 lg:w-1/3 flex border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 focus:outline-none"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3">
            <FaSearch className="text-black" />
          </button>
        </div>

        <div className="w-full md:w-auto">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full md:w-auto border px-4 py-2 rounded-lg"
          >
            <option value="">Sort</option>
            <option value="name">Sort by Name (Alphabetically)</option>
            <option value="experience">Sort by Experience (Higher to Lower)</option>
            <option value="rate">Sort by Rs./Min (Less to much)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedAstrologers.map((astrologer) => (
          <div
            key={astrologer.name}
            className="bg-pink-200 rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedAstrologer(astrologer)}
          >
            <img
              src={astrologer.avatar}
              className="w-20 h-20 mx-auto rounded-full object-cover"
              alt={astrologer.name}
            />
            <h3 className="text-center text-lg font-bold mt-4">
              {astrologer.name}
            </h3>
            <div className="flex justify-center items-center mt-2 text-yellow-500">
              {renderStars(astrologer.rating)}
            </div>
            <p className="text-gray-600 text-center mt-2">
              Exp: {astrologer.experience} Years
            </p>
            <p className="text-black text-center font-bold">₹{astrologer.rate}/min</p>
          </div>
        ))}
      </div>

      {selectedAstrologer && (
        <AstrologerDetails
          astrologer={selectedAstrologer}
          onBack={() => setSelectedAstrologer(null)}
        />
      )}
    </div>
  );
};

export default AstrologerList;
