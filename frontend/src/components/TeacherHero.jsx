import React from 'react'
import tofla from '../assets/images/tofla.png'
import hero2 from '../assets/images/hero2.png'
import polygon from '../assets/icons/polygon.png'
import Navbar from './Navbar'

const TeacherHero = () => {
  return (
    <section   style={{
        backgroundImage: `url(${hero2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top calc(-180px)", // Adjust Y-axis by -50px
        backgroundSize: "cover", // Optional
      }}>
    <Navbar></Navbar>
    <section className="flex flex-col md:flex-row items-center  px-6  md:px-16 lg:px-24 relative "   >
      {/* Left Section */}
      <div className="flex flex-col items-start space-y-6 md:w-1/2 p-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          <span className="text-orange-500">Etudier</span> en ligne est
          désormais beaucoup plus facile
        </h1>
        <p className="text-white text-lg md:text-xl">
          C'est une plateforme intéressante qui vous enseignera de manière plus
          attrayante.
        </p>
        <div className="flex space-x-4 flex-col gap-5">
          <button className="px-6 py-3 bg-purple-400 text-white text-lg rounded-full shadow-md ">
            Rejoignez-nous gratuitement
          </button>
          <div className='flex  items-center'>
          <div className='h-12 w-12 rounded-full bg-white flex items-center justify-center pl-1'><img src={polygon} cl className='h-5 ' alt="ploygon" /></div>
          <button className="px-2 py-3 bg-transparent text-white text-lg  ">
            Regardez comment cela fonctionne
          </button>
          </div>

        </div>
      </div>

      {/* Right Section */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center relative">
        <img
          src={tofla}
          alt="Hero Section"
          className="w-[70%] max-w-md md:max-w-full h-auto object-cover "
        />

        {/* Floating Cards */}
        <div className="absolute bottom-[70%] left-4 bg-purple-200 shadow-md rounded-lg px-4 py-3 flex items-center">
          <div className="bg-purple-100 text-purple-700 rounded-full p-2 mr-4">
            <span className="material-icons text-sm">event</span>
          </div>
          <p className="text-gray-700 text-sm font-medium">
            <strong>250k</strong> Assisted Teacher
          </p>
        </div>

        <div className="absolute bottom-[50%] right-4 bg-purple-200 shadow-md rounded-lg px-4 py-3 flex items-center">
          <div className="bg-orange-100 text-orange-700 rounded-full p-2 mr-4">
            <span className="material-icons text-sm">email</span>
          </div>
          <p className="text-gray-700 text-sm font-medium">
            Congratulations! Your admission completed.
          </p>
        </div>

        <div className="absolute bottom-[30%] left-4 bg-purple-200 shadow-md rounded-lg px-4 py-3 flex flex-col">
          <div className="flex items-center mb-3">
            <div className="bg-green-100 text-green-700 rounded-full p-2 mr-4">
              <span className="material-icons text-sm">class</span>
            </div>
            <p className="text-gray-700 text-sm font-medium">
              User Experience Class <br />
              <small>Today at 12:00 PM</small>
            </p>
          </div>
          <button className="px-4 py-2 bg-purple-700 text-white text-sm rounded-full hover:bg-purple-800">
            Join Now
          </button>
        </div>
      </div>
    </section>
    </section>
  )
}

export default TeacherHero