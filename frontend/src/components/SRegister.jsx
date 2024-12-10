import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import teacher from "../assets/images/studente.jpg";
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SRegister = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    institution: "",
    filière:"",
    niveau: "",
  });

  // State for messages
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission





  return (
    <section className="flex flex-col md:flex-row items-stretch bg-gradient-to-b from-purple-50 to-purple-100 p-6 lg:px-56">
      {/* Left Section: Image */}
      <div className="md:w-1/2 flex items-center justify-center p-5">
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

        {/* Display Message */}
        {message && (
          <p className={`text-center text-lg font-semibold ${message === "Registration successful!" ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}

        {/* Form */}
        <form className="w-full space-y-6">
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
            filière
            </label>
            <select
              name="subjects"
              value={formData.filière}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            >
              <option value="" disabled>
                Sélectionnez votre filière
              </option>
              <option value="1ère année">Mathématiques</option>
              <option value="2ème année">Sciences expérimentales</option>
              <option value="3ème année">Techniques</option>
              <option value="Bac">Lettres</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Niveau
            </label>
            <select
              name="niveau"
              value={formData.niveau}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            >
              <option value="" disabled>
                Sélectionnez votre niveau
              </option>
              <option value="1ère année">1ère année</option>
              <option value="2ème année">2ème année</option>
              <option value="3ème année">3ème année</option>
              <option value="Bac">Bac</option>
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

export default SRegister;
