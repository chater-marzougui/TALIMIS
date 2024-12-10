import React from 'react';
import teacher1 from '../assets/images/teacher1.png'; // Replace with your actual image paths
import teacher2 from '../assets/images/teacher2.png';
import teacher3 from '../assets/images/teacher3.png';
import teacher4 from '../assets/images/teacher4.png';
import call1 from '../assets/icons/call1.png'
import call2 from '../assets/icons/call2.png'
import call3 from '../assets/icons/call3.png'

const ConnectWithColleagues = () => {
  return (
    <section className="py-16 px-6 bg-[#f5effb] flex flex-col items-center">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-4xl font-bold text-[#2F327D]">
        Connectez-vous avec vos collègues
      </h2>

      <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Video Call Mockup */}
        <div className="relative max-w-lg mx-auto md:mx-0">
          {/* Video Call Container */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={teacher1}
                alt="Instructor"
                className="rounded-md shadow-md object-cover"
              />
              <img
                src={teacher2}
                alt="Participant"
                className="rounded-md shadow-md object-cover"
              />
              <img
                src={teacher3}
                alt="Participant"
                className="rounded-md shadow-md object-cover"
              />
              <img
                src={teacher4}
                alt="Participant"
                className="rounded-md shadow-md object-cover"
              />
              
            </div>
            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300">
                Present
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition duration-300">
                Call
              </button>
            </div>
          </div>
          {/* Circle Decorations */}
          <div className="absolute -top-4 -left-4 h-10 w-10 bg-purple-600 rounded-full"></div>
          <div className="absolute -bottom-6 -right-6 h-16 w-16 bg-teal-500 rounded-full"></div>
        </div>

        {/* Right Side: Features List */}
        <div className="flex flex-col gap-6 max-w-lg">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center">
              <img src={call1} alt="" />
            </div>
            <p className="text-gray-600">
              Les enseignants ne se perdent pas dans la vue en grille et ont un
              espace dédié sur le Podium.
            </p>
          </div>
          <div className="flex items-center gap-4">
          <div className="flex items-center justify-center">
              <img src={call2}  alt="" />
            </div>
            <p className="text-gray-600">
              Les assistants pédagogiques (TA) et les présentateurs peuvent être
              déplacés à l'avant de la classe.
            </p>
          </div>
          <div className="flex items-center gap-4">
          <div className="flex items-center justify-center">
              <img src={call3} className='h-5 w-5' alt="" />
            </div>
            <p className="text-gray-600">
              Les enseignants peuvent facilement se connecter avec leurs
              collègues.
            </p>
          </div>
          {/* Explore Button */}
          <button className="self-start px-6 py-3 bg-transparent text-teal-500 border border-teal-500 rounded-full shadow-md hover:bg-teal-500 hover:text-white transition duration-300">
            explorer
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithColleagues;
