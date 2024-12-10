import React from 'react'
import Navbar from './Navbar'
import Herbg from '../assets/images/herobg.png'


const ChatSearch = () => {
  return (
    <div className='bg-cover bg-center' style={{  backgroundImage: `url(${Herbg})`}}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className=" text-white py-20 px-6"
      >
        <div className="md:w-1/2 text-center md:text-left   md:ml-12 ">
          {/* Main Heading */}
          <h1 className="text-[70px] md:text-[62px] font-merriweather font-light leading-tight mb-4">BrainMate</h1>

          {/* Search Bar */}
          <div className="flex bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search for course"
              className="px-4 py-3 flex-grow text-gray-700 focus:outline-none"
            />
            <button className="bg-purple-700 px-6 py-3 mt-1 mb-1 mr-1 rounded-md  text-white font-merriweather">
              Search
            </button>
          </div>
        </div>
      </section>
      </div>
  )
}

export default ChatSearch