import React from 'react'
import Navbar from '../components/Navbar'
import Ieee from '../components/Ieee'
import WIESection from '../components/WIESection'
import GRSSSection from '../components/GRSSSection'
import IASSection from '../components/IASSection'
import RASSection from '../components/RASSection'
import CSSection from '../components/CSSection'
import ExpertSection from '../components/ExpertSection'
import Footer from '../components/Footer'
import { motion } from "framer-motion";

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const scaleAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration:0.6}}
  }
  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration:0.6}}
  }
  return (
    <>
      <Navbar />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInRight}
        viewport={{ once: true, amount: 0.3 }}
      >
      <Ieee />
      </motion.div>

      <WIESection />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeft}
        viewport={{ once: true, amount: 0.3 }}
      >
      <GRSSSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInRight}
        viewport={{ once: true, amount: 0.3 }}
      >
      <IASSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeft}
        viewport={{ once: true, amount: 0.3 }}
      >
      <RASSection />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInRight}
        viewport={{ once: true, amount: 0.3 }}
      >
      <CSSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
      <ExpertSection />
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

export default Contact