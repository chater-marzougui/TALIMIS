import React, { useState } from 'react';
import { BookOpen, FileText, ClipboardList, GraduationCap, Languages, BarChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import SubscribeNow from '../components/SubscribeNow';
import Footer from '../components/Footer';

// Composant principal du tableau de bord
const TeacherToolsDashboard = () => {
  const [activeSection, setActiveSection] = useState('quizzes');

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'quizzes':
        return <QuizManagement />;
      case 'resumees':
        return <ResumeUploader />;
      case 'grading':
        return <GradingDashboard />;
      case 'translation':
        return <TranslationTool />;
      case 'analytics':
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
          <h1 className="text-2xl font-bold mb-6 text-center text-purple-800">Outils pour Enseignants</h1>
          <nav>
            {[ 
              { name: 'Quiz', icon: ClipboardList, key: 'quizzes' },
              { name: 'Resumé', icon: FileText, key: 'resumees' },
              { name: 'Évaluation', icon: BarChart, key: 'grading' },
              { name: 'Traduction', icon: Languages, key: 'translation' },
              { name: 'Analyse de l\'apprentissage', icon: GraduationCap, key: 'analytics' }
            ].map(({ name, icon: Icon, key }) => (
              <button 
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-full flex items-center p-3 mb-2 rounded-lg transition-colors ${
                  activeSection === key 
                    ? 'bg-purple-600 text-white' 
                    : 'hover:bg-purple-200 text-purple-700'
                }`}
              >
                <Icon className="mr-3" />
                {name}
              </button>
            ))}
          </nav>
        </div>

        {/* Zone de contenu principal */}
        <div className="flex-1 p-8">
          {renderActiveSection()}
        </div>
      </div>

      <SubscribeNow />
      <Footer />
    </>
  );
};

// Composant de gestion des quiz
const QuizManagement = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [newQuiz, setNewQuiz] = useState({ title: '', subject: '' });

  const createQuiz = () => {
    if (newQuiz.title && newQuiz.subject) {
      setQuizzes([...quizzes, { 
        ...newQuiz, 
        id: Date.now(), 
        questions: [] 
      }]);
      setNewQuiz({ title: '', subject: '' });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-purple-800">Gestion des Quiz</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input 
            placeholder="Titre du Quiz"
            value={newQuiz.title}
            onChange={(e) => setNewQuiz({...newQuiz, title: e.target.value})}
            className="border border-purple-300 p-2 rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <input 
            placeholder="Matière"
            value={newQuiz.subject}
            onChange={(e) => setNewQuiz({...newQuiz, subject: e.target.value})}
            className="border border-purple-300 p-2 rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>
        <button 
          onClick={createQuiz}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          Créer un nouveau Quiz
        </button>

        {quizzes.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Quiz existants</h3>
            <ul>
              {quizzes.map(quiz => (
                <li 
                  key={quiz.id} 
                  className="flex justify-between items-center bg-purple-100 p-3 rounded mb-2"
                >
                  <span className="text-purple-800">{quiz.title} - {quiz.subject}</span>
                  <div>
                    <button className="text-purple-600 mr-2 hover:text-purple-800">Modifier</button>
                    <button className="text-purple-600 hover:text-purple-800">Supprimer</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const ResumeUploader = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-purple-800">CV des Leçons</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <input 
          type="file" 
          multiple 
          onChange={handleFileUpload}
          className="mb-4 text-purple-600 
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-purple-50 file:text-purple-700
            hover:file:bg-purple-100"
        />

        {uploadedFiles.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Fichiers téléchargés</h3>
            <ul>
              {uploadedFiles.map((file, index) => (
                <li 
                  key={index} 
                  className="flex justify-between items-center bg-purple-100 p-3 rounded mb-2"
                >
                  <span className="text-purple-800">{file.name}</span>
                  <button className="text-purple-600 hover:text-purple-800">Supprimer</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Autres composants fictifs (simplifiés pour la clarté)
const GradingDashboard = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-6 text-purple-800">Tableau de bord d'évaluation</h2>
    <p className="text-purple-700">Les fonctionnalités d'évaluation et de suivi des performances des étudiants arrivent bientôt.</p>
  </div>
);

const TranslationTool = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-6 text-purple-800">Outil de Traduction</h2>
    <p className="text-purple-700">Les fonctionnalités de traduction similaires à Google Translate arrivent bientôt.</p>
  </div>
);

const LearningAnalytics = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-6 text-purple-800">Analyse de l'apprentissage</h2>
    <p className="text-purple-700">Les fonctionnalités de suivi des performances des étudiants et des tendances d'apprentissage arrivent bientôt.</p>
  </div>
);

export default TeacherToolsDashboard;
