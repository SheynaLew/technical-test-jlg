import "./QuestionCard.css";
import OpinionBar from "./OpinionBar/OpinionBar";

export default function QuestionCard({
  progress,
  currentQuestionIndex,
  questions,
  onAnswer,
}) {
  const currentQuestion = questions[currentQuestionIndex]; // For now, hardcoded to first question

  return (
    <section className="questionsCard--container">
      <p className="questionsCard--progress">Your progress - {progress}%</p>
      {/* ProgressBar component here */}
      <div className="questionsCard--question-container">
        <span className="questionsCard--question-number">
          Q{currentQuestionIndex + 1}/{questions.length}{" "}
        </span>
        <div className="questionsCard--question">
          <p className="questionsCard--question-prompt">
            In a job, I would be motivated by:
          </p>
          <p className="questionsCard--question-text">{currentQuestion.text}</p>
          <OpinionBar questionId={currentQuestion.id} onAnswer={onAnswer} />
        </div>
      </div>
      <p className="questionsCard--question-review-text">
        To review your previous answers, scroll back before selecting "finish".
      </p>
    </section>
  );
}
