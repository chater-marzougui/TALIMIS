import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCalendar from "../components/ProfileCalendar";
import TeacherHero from "../components/TeacherHero";
import ForInstructors from "../components/ForInstructors";
import Totc from "../components/Totc";
import ConnectWithColleagues from "../components/ConnectWithColleagues";
import ChatbotSection from "../components/ChatBotSection";
import MentorHelp from "../components/MentorHelp";
import PrivateDiscussionSection from "../components/PrivateDiscussionSection";
import Footer from "../components/Footer"
import { motion } from "framer-motion";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const userId = localStorage.getItem("userId"); // Retrieve the user ID from local storage (you should store it during login)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the JWT token
        const response = await axios.get(`http://localhost:5000/api/auth/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token in Authorization header
          },
        });
        setUserProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch user profile");
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserProfile();
    } else {
      setError("User ID not found. Please log in again.");
      setLoading(false);
    }
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration:0.6 }}
  }
  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration:0.6}}
  }
  const scaleAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };
  const rotateAnimation = {
    hidden: { opacity: 0, rotate: -180, scale: 0.8 },
    visible: {
      opacity: 1,
      rotate: 0, // Final rotation angle
      scale: 1, // Final scale
      transition: { duration: 0.8 }, // Add a delay and adjust duration
    },
  };
  const slideInLeft = {
    hidden: { x: "-50vw" }, // Move less far off-screen
    visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
  };
  const slideInRight = {
    hidden: { x: "50vw" }, // Move less far off-screen
    visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
  };
  const combinedEffect = {
    hidden: { opacity: 0, scale: 0.8, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <>

        <TeacherHero></TeacherHero>
      


        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInRight}
        viewport={{ once: true, amount: 0.3 }}
        >
            <ProfileCalendar></ProfileCalendar>

        </motion.div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={scaleAnimation}
        viewport={{ once: true, amount: 0.3 }}
        >

        <ForInstructors></ForInstructors>

        </motion.div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeft}
        viewport={{ once: true, amount: 0.3 }}
        >
        <Totc></Totc>
        </motion.div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={rotateAnimation}
        viewport={{ once: true, amount: 0.3 }}
        >        
        <ConnectWithColleagues></ConnectWithColleagues>
        </motion.div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInLeft}
        viewport={{ once: true, amount: 0.3 }}
        >
        <ChatbotSection></ChatbotSection>
        </motion.div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInRight}
        viewport={{ once: true, amount: 0.3 }}
        >       
        <MentorHelp></MentorHelp>
        </motion.div> 
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={combinedEffect}
        viewport={{ once: true, amount: 0.3 }}
        >         
        <PrivateDiscussionSection></PrivateDiscussionSection>
        </motion.div> 

        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeft}
        viewport={{ once: true, amount: 0.3 }}
        >          
        <Footer></Footer>

        </motion.div> 

    </>
  );
};

export default UserProfile;
