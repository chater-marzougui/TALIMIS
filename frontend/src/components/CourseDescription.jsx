import React from "react";

const CourseDescription = () => {
  return (
    <section className="bg-[#f5effb] py-8 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Titre du cours */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          AI 101 pour enseignants | Épisode 2
        </h2>

        {/* Section Description */}
        <div>
          <h3 className="text-lg font-bold text-purple-700 mb-2">
            Description du cours
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Ce cours introduit les bases de l'intelligence artificielle pour
            fournir aux enseignants des outils pratiques et des connaissances
            essentielles. Découvrez comment l'IA peut transformer les méthodes
            d'enseignement et alléger les tâches administratives.
          </p>
        </div>

        {/* Public cible */}
        <div>
          <h3 className="text-lg font-bold text-purple-700 mb-2">
            À qui s'adresse ce cours ?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Enseignants de tous niveaux souhaitant comprendre et appliquer les
            principes de l'IA dans leurs salles de classe.
          </p>
        </div>

        {/* Objectifs d'apprentissage */}
        <div>
          <h3 className="text-lg font-bold text-purple-700 mb-4">
            Ce que vous apprendrez dans ce cours :
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-3"></span>
              Les bases de l'intelligence artificielle et ses applications
              pratiques.
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-3"></span>
              Comment intégrer des outils d'IA dans les activités
              pédagogiques.
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-3"></span>
              Réduire le temps passé sur les tâches administratives grâce à
              l'automatisation.
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-3"></span>
              Identifier les limites éthiques et les défis liés à l'utilisation
              de l'IA.
            </li>
          </ul>
        </div>

        {/* Ressources supplémentaires */}
        <div>
          <h3 className="text-lg font-bold text-purple-700 mb-4">
            Ressources utiles :
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
              Articles sur l'intégration de l'IA dans l'éducation.
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
              Tutoriels pour utiliser des outils d'IA comme ChatGPT en classe.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseDescription;

