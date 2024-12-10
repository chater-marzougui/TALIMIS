import React from 'react'
import Navbar from '../components/Navbar'
import SearchComponent from '../components/SearchComponent'
import Courses from '../components/Courses'
import SubscribeNow from '../components/SubscribeNow'
import Footer from '../components/Footer'
import { motion } from "framer-motion";


const CoursesPage = () => {
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

    <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInLeft}
        viewport={{ once: true, amount: 0.3 }}
        >     
    <SearchComponent />
    </motion.div> 


    <Courses />

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

export default CoursesPage