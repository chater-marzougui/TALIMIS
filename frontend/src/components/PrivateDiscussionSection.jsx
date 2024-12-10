import React from 'react';
import teacher1 from '../assets/images/teacher1.png'; // Replace with actual image path
import teacher2 from '../assets/images/teacher4.png'; // Replace with actual image path

const PrivateDiscussionSection = () => {
  return (
    <section className="py-16 px-6 bg-[#f5effb]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Video Call Mockup */}
        <div className="relative">
          <div className="absolute top-4 left-4 w-full h-full bg-blue-100 rounded-lg transform scale-95"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-6 z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">👥</span>
                </div>
                <span className="ml-2 text-gray-800 font-semibold">Private Discussion</span>
              </div>
              <span className="text-gray-500 text-sm">Your video can't be seen by others</span>
            </div>

            {/* Participant Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <img
                  src={teacher1}
                  alt="Mentor 1"
                  className="w-full  object-cover rounded-md shadow"
                />
                <span className="mt-2 text-sm font-semibold text-gray-800">Sophie Howard</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={teacher2}
                  alt="Mentor 2"
                  className="w-full  object-cover rounded-md shadow"
                />
                <span className="mt-2 text-sm font-semibold text-gray-800">Patricia Mendoza</span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-center">
              <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300">
                End Discussion
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2F327D] mb-6">
            Discussions en tête-à-tête
          </h2>
          <p className="text-gray-600 text-sm md:text-xl md:leading-9 leading-relaxed mb-6">
            Les enseignants et mentors peuvent communiquer entre eux de manière
            privée sans quitter l'environnement Zoom.
          </p>
          <a
            href="#"
            className="text-teal-500 font-semibold hover:underline text-sm md:text-base"
          >
            Voir plus de fonctionnalités
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrivateDiscussionSection;
