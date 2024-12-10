import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronDown, Award, BookOpen, Cpu, CheckCircle } from 'lucide-react';

const RoboticsLearning = ({title, description, phases}) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [completedLessons, setCompletedLessons] = useState({});
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});

  const handleSectionClick = (sectionId) => {
    setCompletedLessons({
      ...completedLessons,
      [expandedSection]: true
    });
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
    const element = document.getElementById(sectionId);
    setCurrentQuiz(null);
    if (element) {
      element.scrollIntoView({ behavior: 'instant' });
    }
  };

  const handleQuizStart = (phaseId) => {
    setCurrentQuiz(phaseId);
    setQuizAnswers({});
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answerIndex
    });
  };

  const calculateQuizScore = (phaseId) => {
    const phase = phases[phaseId];
    let correct = 0;
    phase.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) correct++;
    });
    return (correct / phase.quiz.length) * 100;
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cpu className="w-6 h-6" />
             {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            {description}
           </p>
        </CardContent>
      </Card>

      {Object.entries(phases).map(([phaseId, phase]) => (
        <Card key={phaseId} className="border-l-4 border-l-blue-500">
          <CardHeader
            className="cursor-pointer hover:bg-gray-50"
            onClick={() => handleSectionClick(parseInt(phaseId))}
            id={phaseId}
          >
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">Phase {phaseId}:</span>
                {phase.title}
                {completedLessons[phaseId] && <CheckCircle className="w-5 h-5 text-green-500 ml-2" />}
              </div>
              {expandedSection === parseInt(phaseId) ? 
                <ChevronDown className="w-5 h-5" /> : 
                <ChevronRight className="w-5 h-5" />
              }
            </CardTitle>
            <p className="text-gray-600">{phase.description}</p>
          </CardHeader>

          {expandedSection === parseInt(phaseId) && (
            <CardContent className="space-y-4">
              {phase.lessons.map((lesson, idx) => (
                <div key={`${phaseId}-${idx}`} className="border-l-2 border-gray-200 pl-4">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    {lesson.title}
                  </h3>
                  <div className="whitespace-pre-line text-gray-600">
                    {lesson.content}
                  </div>
                </div>
              ))}

              {currentQuiz === parseInt(phaseId) ? (
                <div className="mt-6 space-y-4">
                  <h3 className="font-semibold text-lg">Phase {phaseId} Quiz</h3>
                  {phase.quiz.map((q, qIdx) => (
                    <div key={`${phaseId}-${qIdx}`} className="border rounded-lg p-4">
                      <p className="font-medium mb-2">{q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((option, oIdx) => (
                          <Button
                            key={`${phaseId}-${oIdx}`}
                            variant={quizAnswers[qIdx] === oIdx ? "default" : "outline"}
                            className="w-full justify-start"
                            onClick={() => handleAnswerSelect(qIdx, oIdx)}
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                  {Object.keys(quizAnswers).length === phase.quiz.length && (
                    <div className="mt-4">
                      <p className="text-lg font-semibold">
                        Score: {calculateQuizScore(parseInt(phaseId))}%
                      </p>
                    </div>
                  )}
                </div>
              ) : (phase.quiz && (
                  <Button 
                    className="mt-4"
                    onClick={() => handleQuizStart(parseInt(phaseId))}
                  >
                    <Award className="w-5 h-5 mr-2" />
                    Take Quiz
                  </Button>
                )
              )}
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};
RoboticsLearning.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  phases: PropTypes.object.isRequired,
};

export default RoboticsLearning;