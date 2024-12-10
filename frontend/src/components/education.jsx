import React from "react";
import educationImage from "../assets/images/education.png"; // Replace with the correct image path

const EducationSection = () => {
  return (
    <section className="bg-[#f5effb] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Image Section */}
        <div className="relative  mb-8">
          <div className="relative bg-white shadow-lg rounded-2xl p-8 overflow-hidden">
            <img
              src={educationImage}
              alt="Education"
              className="w-full "
            />
          </div>

          {/* Decorative Dots */}
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8">
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 20 }).map((_, index) => (
                <div
                  key={index}
                  className="w-4 h-4 bg-gray-500 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-purple-900 mb-2">
              Formations Pratiques
            </h3>
            <p className="text-gray-600">
              Maîtrisez les outils numériques grâce à nos formations adaptées à
              vos besoins pédagogiques.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-purple-900 mb-2">
              Ateliers interactifs
            </h3>
            <p className="text-gray-600">
              Explorez des logiciels et ressources innovants pour enrichir vos
              cours.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-purple-900 mb-2">
              Communauté de professeurs
            </h3>
            <p className="text-gray-600">
              Rejoignez une communauté de professeurs partageant leurs
              expériences et solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
