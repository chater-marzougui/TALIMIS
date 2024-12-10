import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import hacker from "../assets/images/hacker.png";
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RegisterMentor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    experience: "",
    specializations: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        specializations: [...prev.specializations, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        specializations: prev.specializations.filter((item) => item !== value),
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("http://localhost:5000/api/auth/register_mentor", formData);
      toast.success("Registered successfully!");
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-stretch bg-gradient-to-b from-purple-50 to-purple-100 p-6 lg:px-56">
      {/* Left Section: Image */}
      <div className="md:w-1/2 h-full flex items-center justify-center">
        <img
          src={hacker}
          alt="Login Illustration"
          className="w-full max-w-md md:max-w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section: Form */}
      <div className="md:w-1/2 flex flex-col items-center justify-center px-6 md:px-12 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900">Eduvi</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-purple-700">
          Bienvenue à {formData.name}!
        </h2>

        {/* Form */}
        <form className="w-full space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom et prénom
            </label>
            <input
              type="text"
              name="name"
              placeholder="Entrez votre nom et prénom"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Entrez votre email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Années d'expérience
            </label>
            <input
              type="text"
              name="experience"
              placeholder="Entrez vos années d'expérience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Domaines de spécialisation
            </label>
            <div className="space-y-2">
              {["Intelligence Artificielle", "Développement logiciel", "Robotique", "Internet des objets", "Autres"].map(
                (specialization, index) => (
                  <div className="flex items-center" key={index}>
                    <input
                      type="checkbox"
                      value={specialization}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-purple-700 border-gray-300 rounded focus:ring-purple-700"
                    />
                    <label className="ml-2 text-gray-700">{specialization}</label>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Entrez votre mot de passe"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                required
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              className="w-[60%] px-4   py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-lg shadow-md hover:opacity-90"
              disabled={loading}
            >
              {loading ? "En cours..." : "S'inscrire en tant que Mentor"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterMentor;
