import React, { useState, useEffect } from "react";
import axios from "axios";

const ResultPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await axios.get("http://localhost:5000/api/results");
      setResults(response.data);
    };
    fetchResults();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Kundli Matching Results</h1>
      {results.map((result, index) => (
        <div key={index} className="p-4 border-b">
          <p><strong>Boy's Name:</strong> {result.boy.name}</p>
          <p><strong>Girl's Name:</strong> {result.girl.name}</p>
          <p><strong>Compatibility Score:</strong> {result.compatibilityScore}%</p>
        </div>
      ))}
    </div>
  );
};

export default ResultPage;
