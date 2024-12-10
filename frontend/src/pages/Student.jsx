import React from 'react'
import Navbar from '../components/Navbar'
import SRegister from '../components/SRegister'
import { delay, motion } from "framer-motion";

const Student = () => {


    const scaleAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
          opacity: 1, 
          scale: 1, 
          transition: { duration: 0.6, delay: 0.5 } // Add a delay of 0.5 seconds
        },
      };
      const fadeInLeft = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration:0.6}}
      }
  return (
    <>
      <Navbar></Navbar> 
      <SRegister></SRegister>
    </>
  )
}

export default Student