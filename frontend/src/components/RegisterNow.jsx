import React from 'react'
import enseignent from '../assets/images/enseignent.png'
import html from '../assets/icons/html.png'
import php from '../assets/icons/php.png'
import java from '../assets/icons/java.png'

const RegisterNow = () => {
  return (
    <section className="bg-[#f5effb] py-12 px-6">
      <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left Column: Text and Buttons */}
        <div className="flex flex-col items-start text-left lg:w-1/2 space-y-6">
          <span className="bg-[#F4EFFA] text-purple-700 px-4 py-2 rounded-md text-xl font-semibold">
            College Level
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900">
            Don’t waste time in <br /> COVID-19 pandemic. <br /> Develop your
            skills.
          </h2>
          <p className="text-gray-600 text-lg">
            High-definition video is video of higher resolution and quality
            than standard-definition. While there is no standardized meaning
            for high-definition, generally any video.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
            Registration Now
          </button>
        </div>

        {/* Right Column: Image */}
        <div className="lg:w-1/2 relative">
          <img
            src={enseignent}
            alt="Developer at Work"
            className="w-full h-auto"
          />
          {/* Decorative Icons */}
          <div className="absolute top-10 right-10 bg-white p-4 rounded-lg shadow-lg">
            <img
              src={html}// Replace with the path to your HTML icon
              alt="HTML Icon"
              className="w-8 h-8"
            />
          </div>
          <div className="absolute top-1/2 right-16 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
            <img
              src={php}// Replace with the path to your PHP icon
              alt="PHP Icon"
              className="w-8 h-8"
            />
          </div>
          <div className="absolute top-10 left-24 bg-white p-4 rounded-lg shadow-lg">
            <img
              src={java} // Replace with the path to your Java icon
              alt="Java Icon"
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterNow