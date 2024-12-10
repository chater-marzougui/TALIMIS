import React from "react";
import Hero from "../components/Hero";
import Lessons from "../components/Lessons";
import MentorSection from "../components/MentorSection";
import SubscribeNow from "../components/SubscribeNow";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/Education";
import { motion } from "framer-motion";

const LandingPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
      {/* Hero Section */}
        <Hero />


      {/* About Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInRight}
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutSection />
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeft}
        viewport={{ once: true, amount: 0.3 }}
      >
        <EducationSection />
      </motion.div>

      {/* Lessons Section */}

        <Lessons />


      {/* Mentor Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInRight}
        viewport={{ once: true, amount: 0.3 }}
      >
        <MentorSection />
      </motion.div>

      {/* Subscribe Now Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeft}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SubscribeNow />
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Footer />
      </motion.div>
    </>
  );
};

export default LandingPage;
