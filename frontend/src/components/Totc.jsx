import React from 'react'

const Totc = () => {
  return (
    <section className="py-12 px-6 bg-[#f5effb]">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Content */}
      <div className='relative'>
        <div className='absolute h-14 w-14 rounded-full bg-purple-600 z-0 '>

        </div>
        <h2 className="text-2xl md:text-[33px] md:leading-[45px] font-bold text-[#2F327D] leading-tight z-10 relative">
          Tout ce que vous pouvez faire dans une salle de classe physique,{" "}
          <span className="text-[#2F327D]">vous pouvez le faire avec TOTC</span>{" "}
          <span className="text-teal-500">vous pouvez le faire avec TOTC</span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base md:leading-[22px]">
          Le logiciel de gestion scolaire de TOTC aide les écoles
          traditionnelles et en ligne à gérer la planification, la présence, les
          paiements et les salles de classe virtuelles, le tout dans un système
          sécurisé basé sur le cloud.
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-purple-500 font-semibold hover:underline"
        >
          En savoir plus
        </a>
      </div>

      {/* Right Content */}
      <div className="relative">
        {/* Background Gradient Box */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-lg bg-gradient-to-b from-purple-200 to-purple-100 shadow-lg"></div>

        {/* Floating Circles */}
        <div className="absolute top-0 left-0 w-4 h-4 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full shadow-lg"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-b from-purple-300 to-purple-500 rounded-full shadow-lg"></div>
      </div>
    </div>
  </section>
  )
}

export default Totc