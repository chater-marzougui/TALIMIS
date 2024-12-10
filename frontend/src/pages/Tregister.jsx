import React from 'react'
import Navbar from '../components/Navbar'
import RegisterTeacher from '../components/RegisterTeacher'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { delay, motion } from "framer-motion";

const Tregister = () => {
  const scaleAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, delay: 0.5 } // Add a delay of 0.5 seconds
    },
  };
  return (
    <>
    <Navbar ></Navbar>
    <motion.div
                 initial="hidden"
                 whileInView="visible"
                 variants={scaleAnimation}
                 viewport={{ once: true, amount: 0.3 }}
            > 
    <RegisterTeacher />
    </motion.div>
    <ToastContainer />
    </>
  )
}

export default Tregister