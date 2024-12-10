import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import teacher from "../assets/images/teacher.png";
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const RegisterTeacher = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    institution: "",
    subjects: "",
  });
  const navigate = useNavigate()

  // State for messages
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register_teacher", {
        ...formData,
        role: "Teacher", // Set the role to Teacher
      });

      // Display success message
      toast.success("Registered successfully!");
      setTimeout(() => {
        navigate('/login');
      }, 1000);

      // Clear the form
      setFormData({
        name: "",
        email: "",
        password: "",
        institution: "",
        subjects: "",
      });

      console.log(response.data);
    } catch (error) {
      // Display error message
      setMessage(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-stretch bg-gradient-to-b from-purple-50 to-purple-100 p-6 lg:px-56">
      {/* Left Section: Image */}
      <div className="md:w-1/2 h-full flex items-center justify-center">
        <img
          src={teacher}
          alt="Login Illustration"
          className="w-full max-w-md md:max-w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section: Form */}
      <div className="md:w-1/2 flex flex-col items-center justify-center px-6 md:px-12 space-y-6">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900">Eduvi</h1>

        {/* Welcome Message */}
        <h2 className="text-xl md:text-2xl font-semibold text-purple-700">
          Bienvenue à {formData.name}!
        </h2>

        <div className="flex space-x-4">
          <Link to='/login'>
          <button className="px-6 py-3 bg-purple-700 text-white rounded-lg shadow-md hover:opacity-90">
            Se connecter
          </button>
          </Link>
          <Link to='/RegisterAsM'>
          <button className="px-6 py-3 bg-white text-purple-700 border border-purple-700 rounded-lg shadow-md hover:bg-purple-100">
            S'inscrire en tant que Mentor 
          </button>
          </Link>
        </div>

        {/* Display Message */}
        {message && (
          <p className={`text-center text-lg font-semibold ${message === "Registration successful!" ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}

        {/* Form */}
        <form className="w-full space-y-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom et prénom
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrez votre nom et prénom"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          {/* Institution Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Etablissement
            </label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              placeholder="Entrez votre établissement"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          {/* Subjects Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Matière enseignée
            </label>
            <select
              name="subjects"
              value={formData.subjects}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            >
              <option value="" disabled>
                Sélectionnez une matière
              </option>
              <option value="Mathematics">Mathématiques</option>
              <option value="Science">Sciences</option>
              <option value="Literature">Littérature</option>
              <option value="History">Histoire</option>
              <option value="Language">Langues</option>
              <option value="Other">Autre</option>
            </select>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Entrez votre mot de passe"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-lg shadow-md hover:opacity-90"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterTeacher;
