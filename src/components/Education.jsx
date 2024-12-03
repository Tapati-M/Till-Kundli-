import React from "react";
import { education1, education2, education3 } from "../assets";
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();
    const handleConsultAstrologer = () => {
        navigate('/consult-astrologer', { state: { fromHealth: true } });
      };
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
          EDUCATION
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={education1} // Replace with an appropriate image URL
              alt="Ask Question on Children"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
              ASK QUESTION ON EDUCATIOND
              </h2>
              <p className="text-gray-600 text-sm mb-4">
              Astrologer education do you have burning desire to knowthe answer to your question like :Will I clear the exam? Or Will I beable to win in the completion? OrWill I get admission to the college ofmy choice? Or any similar questionthen this is the perfect astrologyservice for you. You can get theanswers related to education,studies, competitive exams etcthrough our expert astrologer.
              </p>
             
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={education2} // Replace with an appropriate image URL
              alt="Progeny Report"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">EDUCATION REPORT</h2>
              <p className="text-gray-600 text-sm mb-4">
               Looking to find the best educaton line or wanting to know how the studies are going to be in the coming years then get the education report made by our expert astrologer who would prepare the horoscope analysis and would give you the best advice for your future.

              </p>
              
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={education3} // Replace with an appropriate image URL
              alt="Child Name Report"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">SUCCESS REPORT</h2>
              <p className="text-gray-600 text-sm mb-4">
                If you wish to know all about your horoscope in relation to your actual capabilities and strength to succeed in desired exams and interviews then this is the best astrology report for you. Why worry when you can plan the things better. Know the favorable periods to go for the exams and also how to get better grades and positions. 
              </p>
              
            </div>
          </div>
        </div>
        <div className="flex justify-center mr-8 px-4 mt-8">
          <button 
         onClick={handleConsultAstrologer}
          className="bg-blue-500 text-white px-4 py-2 rounded  hover:bg-blue-600">
                Consult Astrologer
              </button></div>
      </div>
    </div>
  );
}

export default App;