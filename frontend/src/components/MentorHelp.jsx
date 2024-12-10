import React from 'react';
import teacher1 from '../assets/images/teacher1.png'; // Replace with actual image path
import teacher2 from '../assets/images/teacher2.png'; // Replace with actual image path
import teacher3 from '../assets/images/teacher3.png'; // Replace with actual image path

const MentorSection = () => {
  return (
    <section className="py-16 px-6 bg-[#f5effb]">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Text Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2F327D] mb-6">
          Demander à un mentor
        </h2>
        <p className="text-gray-600 text-sm md:text-xl md:leading-9 leading-relaxed">
          Les enseignants peuvent demander à un mentor des ressources
          supplémentaires pour obtenir des outils, des stratégies ou des
          matériaux supplémentaires qui peuvent soutenir leur enseignement,
          aider à améliorer la gestion de la classe ou enrichir
          l'apprentissage des élèves.
        </p>
        <button className="mt-8 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
          Contacter un mentor
        </button>
      </div>

      {/* Design Section */}
      <div className="relative bg-gradient-to-r from-purple-100 to-white rounded-lg shadow-md p-24">
        <h3 className="text-center text-gray-800 font-bold text-xl mb-6">
          Decouvrir nos experts
        </h3>

        {/* Mentor Profiles */}
        <div className="grid grid-cols-3 gap-6 items-center">
          {/* Mentor 1 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-purple-200 shadow-lg">
              <img
                src={teacher1}
                alt="Mentor 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center mt-3">
              <p className="text-lg font-semibold text-gray-800">Sophie</p>
              <span className="text-sm text-gray-500">100+ Students</span>
            </div>
          </div>

          {/* Mentor 2 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-purple-200 shadow-lg">
              <img
                src={teacher2}
                alt="Mentor 2"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center mt-3">
              <p className="text-lg font-semibold text-gray-800">Adam</p>
              <span className="text-sm text-gray-500">85+ Students</span>
            </div>
          </div>

          {/* Mentor 3 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-purple-200 shadow-lg">
              <img
                src={teacher3}
                alt="Mentor 3"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center mt-3">
              <p className="text-lg font-semibold text-gray-800">Priya</p>
              <span className="text-sm text-gray-500">75+ Students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default MentorSection;
