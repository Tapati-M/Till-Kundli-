import React from "react";
import {child1, child2, child3} from "../assets"
import { useNavigate } from "react-router-dom";
function Child() {
const navigate = useNavigate();
    const handleConsultAstrologer = () => {
        navigate('/consult-astrologer', { state: { fromHealth: true } });
      };
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
          CHILD CARE
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={child1} // Replace with an appropriate image URL
              alt="Ask Question on Children"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                ASK QUESTION ON CHILDREN
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                If you have deep concerns and are looking for predictions on
                child birth, conception, or the development of your child,
                education, competitions, etc., this is the right report for you.
              </p>
              
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={child2} // Replace with an appropriate image URL
              alt="Progeny Report"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">PROGENY REPORT</h2>
              <p className="text-gray-600 text-sm mb-4">
                Planning for childbirth? Get answers through the star’s analysis
                of your horoscope. This report provides information on the best
                period for conception and effective remedies.
              </p>
              
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={child3} // Replace with an appropriate image URL
              alt="Child Name Report"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">CHILD NAME REPORT</h2>
              <p className="text-gray-600 text-sm mb-4">
                A name is an important part of one's identity. This report helps
                you choose a name with astrological significance to improve
                overall planetary effects.
              </p>
              
            </div>
          </div>
        </div>
        <div 
        className="flex justify-center mr-8 px-4 mt-8">
          <button 
         onClick={handleConsultAstrologer}
          className="bg-blue-500 text-white px-4 py-2 rounded  hover:bg-blue-600">
                Consult Astrologer
              </button></div>
      </div>
    </div>
  );
}

export default Child;