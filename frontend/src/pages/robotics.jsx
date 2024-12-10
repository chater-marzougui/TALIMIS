import React from 'react'
import Navbar from '../components/Navbar'
import SearchComponent from '../components/SearchComponent'
import SubscribeNow from '../components/SubscribeNow'
import Footer from '../components/Footer'
import { motion } from "framer-motion";
import RoboticsLearning from '../components/RoboticsElement'
import { phases } from '../components/robotics-assets/phases'


const RoboticsPage = () => {
  const slideInLeft = {
    hidden: { x: "-50vw" }, // Move less far off-screen
    visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration:0.8 }}
  }
  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration:0.8 }}
  }
  return (
    <>
    <Navbar />

    <RoboticsLearning
      title="Interactive Robotics Learning From Scratch"
      description="Master robotics through hands-on learning and interactive content. Complete each phase to progress your skills from beginner to intermediate level."
      phases={phases}
     />

    <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInRight}
        viewport={{ once: true, amount: 0.3 }}
      >    
    <SubscribeNow />
    </motion.div>   

    <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeft}
        viewport={{ once: true, amount: 0.3 }}
      >  
    <Footer />
    </motion.div>      
    </>
  )
}

export default RoboticsPage