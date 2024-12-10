import React from 'react';
import { motion } from 'framer-motion';

const Lessons = () => {
  // Variantes d'animation
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai entre les animations des enfants
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="bg-[#f5effb] py-12 px-6"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-28">
        {/* Premier enfant : Titre, paragraphe et boutons */}
        <div className="flex flex-col items-center text-center gap-6">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg shadow-md hover:opacity-90 transition">
            Commencer votre transition numérique
          </button>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Cours Populaires
          </h2>
        </div>

        {/* Deuxième enfant : Grille de cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Carte 1 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            variants={cardVariants}
          >
            <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-b from-[#F9880D] to-[#FFB54A] flex items-center justify-center">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Un</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Le standard 1 est un standard fondamental qui reflète 7 concepts importants...
            </p>
            <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Détails du cours
            </button>
          </motion.div>

          {/* Carte 2 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            variants={cardVariants}
          >
            <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-b from-[#F9880D] to-[#FFB54A] flex items-center justify-center">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Deux</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Le standard 2 aborde des concepts clés dans le domaine...
            </p>
            <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Détails du cours
            </button>
          </motion.div>

          {/* Carte 3 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            variants={cardVariants}
          >
            <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-b from-[#F9880D] to-[#FFB54A] flex items-center justify-center">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Trois</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Le standard 3 traite de la sécurité et des meilleures pratiques...
            </p>
            <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Détails du cours
            </button>
          </motion.div>
          {/* Carte 4 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            variants={cardVariants}
          >
            <div className="text-3xl font-bold text-white mb-4 rounded-full w-12 h-12 bg-gradient-to-b from-[#F9880D] to-[#FFB54A] flex items-center justify-center">
              4
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standard Trois</h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Le standard 4 traite de la sécurité et des meilleures pratiques...
            </p>
            <button className="px-4 py-2 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-700 hover:text-white transition">
              Détails du cours
            </button>
          </motion.div>

          {/* Les autres cartes suivent le même format, adaptées pour les standards 4 à 8 */}
        </div>

        {/* Bouton pour afficher plus */}
        <motion.div
          className="text-center"
          variants={cardVariants}
        >
          <button className="px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
            Voir plus de cours
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Lessons;

