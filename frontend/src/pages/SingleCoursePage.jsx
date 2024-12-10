import React from 'react'
import Navbar from '../components/Navbar'
import VideoCourse from '../components/VideoCourse'
import CourseDescription from '../components/CourseDescription'
import SubscribeNow from '../components/SubscribeNow'
import Footer from '../components/Footer'
import { delay, motion } from "framer-motion";

const SingleCoursePage = () => {

  const scaleAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 , delay:0.4 } },
  };

  const slideInRight = {
    hidden: { x: "50vw" }, // Move less far off-screen
    visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration:0.6}}
  }
  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration:0.6}}
  }

  return (
    <>
    <Navbar />

    <motion.div
        initial="hidden"
        whileInView="visible"
        variants={scaleAnimation}
        viewport={{ once: true, amount: 0.3,}}
        >
    <VideoCourse />
    </motion.div>

    <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInRight}
        viewport={{ once: true, amount: 0.3,}}
        >
    <CourseDescription />
    </motion.div>

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

export default SingleCoursePage