import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/images/talimis.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const backgroundStyle =
    location.pathname === "/" || location.pathname === "/profile" || location.pathname === "/BrainMate"
      ? "transparent"
      : "linear-gradient(90deg, #532B88 0%, #2F184B 100%)";

  const [userName, setUserName] = useState(null);

  // Fetch user details if token exists
  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (token && userId) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/auth/profile/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Include token in Authorization header
              },
            }
          );
          setUserName(response.data.user.name);
        } catch (error) {
          console.error("Failed to fetch user details:", error);
        }
      }
    };

    fetchUserDetails();
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      toast.success("Logout successful!");
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed! Please try again.");
    }
  };

  // Framer Motion Variants for Bounce Effect
  const bounceVariants = {
    hidden: { y: -100, opacity: 0 }, // Start from above the screen
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring", // Use spring for bounce
        stiffness: 100, // Adjust stiffness for more/less bounce
        damping: 8, // Controls how much the bounce settles
        duration: 0.5,
      },
    },
  };

  return (
    <motion.nav
      className="text-white px-6 py-4 font-merriweather font-light"
      style={{ background: backgroundStyle }}
      initial="hidden"
      animate="visible"
      variants={bounceVariants} // Apply bounce animation to the entire navbar
    >
      <div className="mx-auto flex justify-between">
        {/* Logo Section */}
        <a className="flex items-center mx-14 cursor-pointer" href="/">
          <img
            src={Logo} // Replace with your logo path
            alt="Eduvi Logo"
            className="h-8"
          />
          <h1 className="ml-3 text-xl">Talimis</h1>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 justify-between
        items-center gap-16">
            <motion.a
              href="/"
              className="text-lg  hover:text-gray-300"
              variants={bounceVariants} // Apply bounce effect to individual items
            >
              Accueil
            </motion.a>
            <motion.a
              href="/courses"
              className="text-lg  hover:text-gray-300"
              variants={bounceVariants} // Apply bounce effect to individual items
            >
              Cours
            </motion.a>
            <motion.a
              href="/outils"
              className="hover:text-gray-300"
              variants={bounceVariants} // Apply bounce effect to individual items
            >
              Outils
            </motion.a>
            <motion.a
              href="/BrainMate"
              className="text-lg hover:text-gray-300"
              variants={bounceVariants} // Apply bounce effect to individual items
            >
              BrainMate
            </motion.a>
            <motion.a
              href="/contact"
              className="hover:text-gray-300"
              variants={bounceVariants} // Apply bounce effect to individual items
            >
              Contact
            </motion.a>
        </div>

        {/* Icons Section */}
        <div className="flex items-center mx-16 justify-between gap-5">
          {userName ? (
            <>
              <motion.button
                onClick={handleLogout}
                className="px-4 py-2 bg-[#F4EFFA] text-purple-700 border border-purple-700 rounded-full hover:bg-purple-100"
                variants={bounceVariants}
              >
                Logout
              </motion.button>
              <motion.a
                href="/profile"
                className="px-4 py-2 bg-[#C8B1E4] text-black rounded-full hover:opacity-90"
                variants={bounceVariants}
              >
                {userName}
              </motion.a>
            </>
          ) : (
            <>
              <motion.a
              href="/login"
                onClick={() => navigate("/login")}
                className="px-4 py-2 bg-[#F4EFFA] text-purple-700 border border-purple-700 rounded-full hover:bg-purple-100"
                variants={bounceVariants}
              >
                Connexion
              </motion.a>
              <motion.a
              href="/RegisterAsT"
                onClick={() => navigate("/register")}
                className="px-4 py-2 bg-[#C8B1E4] text-black rounded-full hover:opacity-90"
                variants={bounceVariants}
              >
                S'inscrire
              </motion.a>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
