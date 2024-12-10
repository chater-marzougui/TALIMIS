import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

export default function QuizPage() {
  const [paragraph, setParagraph] = useState(""); // Stores the definition
  const [questions, setQuestions] = useState([]); // Stores the generated questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Keeps track of the current question
  const [userAnswers, setUserAnswers] = useState({}); // Stores user answers
  const [quizSubmitted, setQuizSubmitted] = useState(false); // Flag to indicate if quiz is submitted
  console.log(questions);
  console.log(JSON.stringify({ paragraph: paragraph }));

  // Handle form submission to generate quiz based on the paragraph
  const handleDefinitionSubmit = async (e) => {
    e.preventDefault();
    let object2 = { paragraph: paragraph }; // Prevents page reload on form submission
    console.log(object2);
    try {
      const response = await fetch(
        "https://b344-196-203-181-122.ngrok-free.app/generate-quiz/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(object2),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to generate questions");
      }
      const data = await response.json();

      setQuestions(data.questions); // Set the questions state with the returned questions
    } catch (error) {
      console.error("Error generating questions:", error); // Log error if the API call fails
    }
  };

  // Handle user selection of an answer for a given question
  const handleAnswerSelect = (questionId, answer) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  // Handle the navigation to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  // Handle the navigation to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // Handle the submission of the quiz
  const handleQuizSubmit = () => {
    setQuizSubmitted(true); // Set the quizSubmitted flag to true
  };

  // Calculate the user's score based on their answers
  const calculateScore = () => {
    let score = 0;
    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" gutterBottom>
        Quiz App
      </Typography>

      {/* If there are no questions, show the form to enter the definition */}
      {Array.isArray(questions) && questions.length === 0 ? (
        <Card>
          <CardHeader title="Enter a Definition" />
          <CardContent>
            <form
              onSubmit={handleDefinitionSubmit}
              style={{ display: "grid", gap: "16px" }}
            >
              <TextField
                label="Definition"
                variant="outlined"
                fullWidth
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)} // Update the paragraph state
                required
              />
              <Button type="submit" variant="contained">
                Generate Questions
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : quizSubmitted ? (
        // If the quiz has been submitted, show the results
        <Card>
          <CardHeader title="Quiz Results" />
          <CardContent>
            <Typography variant="h6">
              Your score: {calculateScore()} out of {questions.length}
            </Typography>
            {questions.map((question, index) => (
              <div key={question.id} style={{ marginBottom: "16px" }}>
                <Typography variant="subtitle1">
                  {index + 1}. {question.text}
                </Typography>
                <Typography>Your answer: {userAnswers[question.id]}</Typography>
                <Typography
                  color={
                    userAnswers[question.id] === question.correctAnswer
                      ? "success.main"
                      : "error.main"
                  }
                >
                  Correct answer: {question.correctAnswer}
                </Typography>
              </div>
            ))}
            <Button
              variant="contained"
              onClick={() => {
                setQuestions([]);
                setUserAnswers({});
                setQuizSubmitted(false);
                setCurrentQuestionIndex(0);
              }}
            >
              Start New Quiz
            </Button>
          </CardContent>
        </Card>
      ) : (
        // If the quiz is ongoing, show the current question
        <Card>
          <CardHeader
            title={`Question ${currentQuestionIndex + 1} of ${
              questions.length
            }`}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {questions[currentQuestionIndex].text}
            </Typography>
            <RadioGroup
              value={userAnswers[questions[currentQuestionIndex].id] || ""}
              onChange={(e) =>
                handleAnswerSelect(
                  questions[currentQuestionIndex].id,
                  e.target.value
                )
              }
            >
              {questions[currentQuestionIndex].options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
            <CardActions style={{ justifyContent: "space-between" }}>
              <Button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>
              {currentQuestionIndex === questions.length - 1 ? (
                <Button variant="contained" onClick={handleQuizSubmit}>
                  Submit Quiz
                </Button>
              ) : (
                <Button variant="contained" onClick={handleNextQuestion}>
                  Next
                </Button>
              )}
            </CardActions>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
