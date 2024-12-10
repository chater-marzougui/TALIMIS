import React from "react";
import coursebg from '../assets/images/coursebg.png'

const SearchComponent = () => {


  return (
    <div className=" p-8 relative"   style={{
        backgroundImage: `url(${coursebg})`,
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image within the div
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}>
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Search Input */}
        <div className="w-full flex items-center bg-white rounded-lg shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Rechercher des cours"
            className="w-full px-4 py-3 text-gray-700 focus:outline-none"
          />
          <button className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-r-lg hover:bg-purple-800 transition">
            recherche
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-between w-full mt-6 gap-4">
          <select className="flex-1 px-4 py-3 bg-white rounded-lg shadow-md text-gray-700 border-none focus:ring-2 focus:ring-purple-700">
            <option value="">Matière</option>
            <option value="mathematics">Mathématiques</option>
            <option value="science">Science</option>
            <option value="history">Histoire</option>
          </select>

          <select className="flex-1 px-4 py-3 bg-white rounded-lg shadow-md text-gray-700 border-none focus:ring-2 focus:ring-purple-700">
            <option value="">Domaine</option>
            <option value="it">Technologie</option>
            <option value="art">Art</option>
            <option value="literature">Littérature</option>
          </select>

          <select className="flex-1 px-4 py-3 bg-white rounded-lg shadow-md text-gray-700 border-none focus:ring-2 focus:ring-purple-700">
            <option value="">Language</option>
            <option value="french">Français</option>
            <option value="english">Anglais</option>
            <option value="spanish">Espagnol</option>
          </select>

          <select className="flex-1 px-4 py-3 bg-white rounded-lg shadow-md text-gray-700 border-none focus:ring-2 focus:ring-purple-700">
            <option value="">Type</option>
            <option value="online">En ligne</option>
            <option value="physical">Physique</option>
            <option value="hybrid">Hybride</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
