import React from 'react'
import instructor from '../assets/images/instructor.png'

const ForInstructors = () => {
  return (
    <section className="py-16 px-6 bg-[#f5effb] text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        C’est quoi <span className="text-blue-500">?</span>
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Talimis est une plateforme qui permet aux enseignants de créer des cours
        en ligne, de stocker les supports de cours, de gérer les devoirs, les
        quiz et les examens, de suivre les dates d’échéance, d’évaluer les
        résultats et de fournir des retours aux étudiants, le tout en un seul
        endroit.
      </p>

      {/* Image with overlay */}
      <div className="mt-12 relative max-w-4xl mx-auto">
        <img
          src={instructor}
          alt="Instructor"
          className="rounded-lg shadow-lg object-cover"
        />
        {/* Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-56  bg-black bg-opacity-20 text-white rounded-lg p-6 shadow-lg w-[600px] h-[400px] flex flex-col ">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-32">Pour les instructeurs</h3>
                  <button className="px-8 py-3 bg-transparent text-white border border-white font-semibold rounded-full shadow-md hover:bg-white hover:text-gray-900 transition duration-300">
  Lancez un cours dès aujourd’hui
</button>
                </div>
        </div>
      </div>
    </section>
  )
}

export default ForInstructors