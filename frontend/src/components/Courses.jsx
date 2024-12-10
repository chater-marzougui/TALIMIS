import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import courseimg from '../assets/images/course.png'; // Update this import path

const Courses = () => {
  const courses = [
    {
      title: "Robotics From Scratch",
      description: "Master robotics through hands-on learning and interactive content. Complete each phase to progress your skills from beginner to intermediate level.",
      link: "/robotics",
    },
    {
      title: "AI 101 pour enseignants",
      description: "Introduction aux fondamentaux de l'intelligence artificielle qui vous fournira les connaissances de base pour comprendre...",
      link: "https://www.khanacademy.org/college-careers-more/ai-for-education/x68ea37461197a514:unit-teaching-with-ai/x68ea37461197a514:ai-101-for-teachers-lesson/v/ai-101-for-teachers-fireside-chat-with-sal-khan-and-hadi-partovi",
    },
    {
      title: "Démonstration d'outil d'IA",
      description: "Differentiating Class Materials With Drift",
      link: "https://www.edutopia.org/video/ai-tool-demo-differentiating-class-materials-with-diffit",
    },
    {
      title: "Construire un noyau",
      description: "Expliquez comment le changement du nombre de neutrons du proton affecte le numéro atomique et les espaces isotopiques.",
      link: "https://phet.colorado.edu/en/simulations/build-a-nucleus",
    },
    {
      title: "Laboratoire de données sur les projectiles",
      description: "Visualisez et écoutez les données résultant du caractère aléatoire de la vitesse et de l'angle de lancement dans le monde réel.",
      link: "https://phet.colorado.edu/en/simulations/projectile-data-lab",
    },
    {
      title: "Laboratoire électromagnétique de Faraday",
      description: "Prédire la direction du champ magnétique pour différents emplacements autour d'une barre aimantée et d'un électroaimant.",
      link: "https://phet.colorado.edu/en/simulations/faradays-electromagnetic-lab",
    },
    {
      title: "Aiment et boussole",
      description: "Prédire la direction du champ magnétique pour différents emplacements autour d'une barre aimantée et d'un électroaimant.",
      link: "https://phet.colorado.edu/en/simulations/magnet-and-compass",
    },
    {
      title: "Addition de vecteurs",
      description: "Organiser des vecteurs graphiquement pour représenter l'addition ou la soustraction de vecteurs.",
      link: "https://phet.colorado.edu/en/simulations/vector-addition",
    },
    {
      title: "Ajustement de courbe",
      description: "Expliquez comment la plage, l'incertitude et le nombre de points de données affectent le coefficient de corrélation et le chi carré.",
      link: "https://phet.colorado.edu/en/simulations/curve-fitting",
    },
    {
      title: "imprimante 3D ",
      description: "Expliquez comment construire une imprimante 3D a la maison.",
      link: "https://www.youtube.com/watch?v=63Ei-H2gQ48",
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#f5effb] py-16">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }} // Trigger animation when visible
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl p-4"
              variants={itemVariants} // Apply animation to each item
            >
              <img
                src={courseimg}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {course.description}
                </p>
                <Link
                  to={course.link}
                  className="inline-block text-purple-600 font-semibold hover:underline"
                >
                  {course.link.includes('fr') ? 'Voir plus' : 'Voir plus'}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link 
            to="/courses"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition inline-block"
          >
            Voir tout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;