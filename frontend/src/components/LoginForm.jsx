import React , {useState} from 'react'
import loginImg from '../assets/images/loginimg.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = response.data;

      // Store the userId and token in localStorage
      localStorage.setItem("userId", user.id);
      localStorage.setItem("token", token);

      // Display success toast message
      toast.success("Login successful!");
      
      console.log(user.role)

      // Redirect to homepage after a short delay
      setTimeout(() => {
        if (user.role === "Teacher") {
          navigate("/profile"); // Redirect to Teacher profile page
        } else if (user.role === "Mentor") {
          navigate("/mentor"); // Redirect to Mentor page
        } else {
          toast.error("Unknown user role!");
        }
      }, 1000);
    } catch (error) {
      // Display error message
      setMessage(error.response?.data?.message || "Invalid credentials, please try again");
      toast.error(message);
      
    }
  };

  return (
    <section className=" flex flex-col md:flex-row items-center bg-gradient-to-b from-purple-50 to-purple-100 p-10 lg:px-56">
      {/* Left Section: Image */}
      <div className="w-1/2 h-[80%]">
        <img
          src={loginImg}
          alt="Login Illustration"
          className="w-full max-w-xl h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section: Login Form */}
      <div className="w-1/2 flex flex-col items-center justify-center px-12 space-y-8">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-purple-900">logo</h1>

        {/* Welcome Message */}
        <h2 className="text-2xl font-semibold text-purple-700">
          Bienvenue à Talimis!
        </h2>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-purple-700 text-white rounded-lg shadow-md hover:opacity-90">
            Se connecter
          </button>
          <Link to='/RegisterAsT'>
          <button className="px-6 py-3 bg-white text-purple-700 border border-purple-700 rounded-lg shadow-md hover:bg-purple-100">
            S'inscrire 
          </button>
          </Link>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-center">
          Transformez votre manière d’enseigner avec les nouvelles technologies
          ! Des cours simples et pratiques pour maîtriser les outils numériques
          et innover dans vos classes.
        </p>

        {/* Form */}
        <form className="w-full space-y-6" onSubmit={handleSubmit}>
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

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Entrez votre mot de passe"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
              <button
                type="button"
                className="absolute right-4 top-3 text-gray-500 hover:text-purple-700"
              >
                {/* Eye Icon */}
                👁️
              </button>
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember-me"
                className="w-4 h-4 text-purple-700 border-gray-300 rounded focus:ring-purple-700"
              />
              <label htmlFor="remember-me">Se souvenir de moi</label>
            </div>
            <a href="#" className="text-purple-700 hover:underline">
              Mot de passe oublié ?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-lg shadow-md hover:opacity-90"
          >
            Se connecter
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default LoginForm;