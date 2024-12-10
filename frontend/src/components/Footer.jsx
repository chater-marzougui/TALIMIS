import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f5effb] py-12 px-6">
      {/* Grille principale */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Première colonne : Logo et réseaux sociaux */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-2xl font-bold text-purple-900">Eduvi</h3>
          <p className="text-gray-600 text-sm">
            ©2021 Eduvi.co <br />
            Eduvi est une marque déposée d'Eduvi.co
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-purple-900 hover:text-purple-700">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-purple-900 hover:text-purple-700">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-purple-900 hover:text-purple-700">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-purple-900 hover:text-purple-700">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Deuxième à cinquième colonnes : Liens du pied de page */}
        <div>
          <h4 className="font-semibold text-purple-900 mb-4">Cours</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Cours en salle</a></li>
            <li><a href="#">Cours virtuels</a></li>
            <li><a href="#">Cours en ligne</a></li>
            <li><a href="#">Cours vidéo</a></li>
            <li><a href="#">Cours hors ligne</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-purple-900 mb-4">Communauté</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Apprenants</a></li>
            <li><a href="#">Partenaires</a></li>
            <li><a href="#">Développeurs</a></li>
            <li><a href="#">Transactions</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Centre pédagogique</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-purple-900 mb-4">Liens rapides</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Éducation professionnelle</a></li>
            <li><a href="#">Cours</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Témoignages</a></li>
            <li><a href="#">Programmes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-purple-900 mb-4">Plus</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Presse</a></li>
            <li><a href="#">Investisseurs</a></li>
            <li><a href="#">Conditions</a></li>
            <li><a href="#">Confidentialité</a></li>
            <li><a href="#">Aide</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
