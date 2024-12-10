import React from 'react'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'
import { delay, motion } from "framer-motion";

const Login = () => {
  const scaleAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 , delay: 0.7} },
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
            <LoginForm />
        </motion.div>
    </>
  )
}

export default Login