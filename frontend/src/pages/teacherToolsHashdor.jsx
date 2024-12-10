import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  ClipboardList,
  GraduationCap,
  Languages,
  BarChart,
} from "lucide-react";
import Navbar from "../components/Navbar";
import SubscribeNow from "../components/SubscribeNow";
import Footer from "../components/Footer";
import TextSummarizer from "../components/TextSummarizer";
import QuizTool from "../components/QuizTool";
// Composant principal du tableau de bord
const TeacherToolsDashboard = () => {
  const [activeSection, setActiveSection] = useState("quizzes");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "quizzes":
        return <QuizManagement />;
      case "resumees":
        return <ResumeUploader />;
      case "grading":
        return <GradingDashboard />;
      case "translation":
        return <TranslationTool />;
      case "analytics":
        return <LearningAnalytics />;
      default:
        return <QuizManagement />;
    }
  };

  return (
    <>
      <Navbar />
      {/* Mise en page principale */}
      <div className="flex">
        {/* Barre de navigation latérale */}
        <div className="w-64 bg-purple-100 shadow-md p-4">
          <h1 className="text-2xl font-bold mb-6 text-center text-purple-800">
            Outils pour Enseignants
          </h1>
          <nav>
            {[
              { name: "Quiz", icon: ClipboardList, key: "quizzes" },
              { name: "Resumé", icon: FileText, key: "resumees" },
              { name: "Évaluation", icon: BarChart, key: "grading" },
              { name: "Traduction", icon: Languages, key: "translation" },
              {
                name: "Analyse de l'apprentissage",
                icon: GraduationCap,
                key: "analytics",
              },
            ].map(({ name, icon: Icon, key }) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-full flex items-center p-3 mb-2 rounded-lg transition-colors ${
                  activeSection === key
                    ? "bg-purple-600 text-white"
                    : "hover:bg-purple-200 text-purple-700"
                }`}
              >
                <Icon className="mr-3" />
                {name}
              </button>
            ))}
          </nav>
        </div>

        {/* Zone de contenu principal */}
        <div className="flex-1 p-8">{renderActiveSection()}</div>
      </div>

      <SubscribeNow />
      <Footer />
    </>
  );
};

// Composant de gestion des quiz
const QuizManagement = () => {
  return <QuizTool />;
};

const ResumeUploader = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-purple-800">
        CV des Leçons
      </h2>

      <div className="bg-white shadow-md rounded-lg p-6">
        <TextSummarizer />
      </div>
    </div>
  );
};

// Autres composants fictifs (simplifiés pour la clarté)
const GradingDashboard = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-6 text-purple-800">
      Tableau de bord d'évaluation
    </h2>
    <p className="text-purple-700">
      Les fonctionnalités d'évaluation et de suivi des performances des
      étudiants arrivent bientôt.
    </p>
  </div>
);

const TranslationTool = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-6 text-purple-800">
      Outil de Traduction
    </h2>
    <p className="text-purple-700">
      Les fonctionnalités de traduction similaires à Google Translate arrivent
      bientôt.
    </p>
  </div>
);

const LearningAnalytics = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-6 text-purple-800">
      Analyse de l'apprentissage
    </h2>
    <p className="text-purple-700">
      Les fonctionnalités de suivi des performances des étudiants et des
      tendances d'apprentissage arrivent bientôt.
    </p>
  </div>
);

export default TeacherToolsDashboard;