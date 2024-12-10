import React from 'react'
import ieee from '../assets/images/ieee.png'

const Ieee = () => {
  return (
    <section className=" bg-[#f5effb] flex items-center justify-center  py-20">
      <div className="bg-[#522b8b] rounded-3xl  py-5 shadow-lg">
        <img
          src={ieee}
          alt="IEEE Logo"
          className="mx-auto w-90 h-auto" // Adjust the size if needed
        />
      </div>
    </section>

  )
}

export default Ieee