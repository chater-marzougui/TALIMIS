import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#f5effb] py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Title */}
        <h3 className="text-xl text-purple-800 font-medium mb-4">
          A propos de nous
        </h3>
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
          Préparez vos classes à l'ère numérique
        </h2>
        {/* Section Description */}
        <p className="text-gray-700 text-sm md:text-base leading-6 md:leading-7 mb-8">
          Découvrez comment exploiter la puissance de la technologie pour
          engager vos élèves et améliorer l'apprentissage. La technologie
          transforme le paysage éducatif, et notre mission est d'accompagner
          les professeurs dans cette transition.{" "}
          <span className="font-semibold">Talimis</span> vous
          offre des outils pratiques, des formations spécialisées, et un
          accompagnement personnalisé pour intégrer efficacement la technologie
          dans vos méthodes d'enseignement.
        </p>
        {/* Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg shadow-md hover:opacity-90 transition">
          Visiter les Cours
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
