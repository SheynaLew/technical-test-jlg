export default function QuestionCard({ progress, questions }) {
  return (
    <section className="questionsCard--container">
      <p className="questionsCard--progress">Your progress - {progress}%</p>
      {/* ProgressBar component here */}
      <div className="questionsCard--question-container">
        <p className="questionsCard--question">
          <span className="questionsCard--question-number">
            Q1/{questions.length}{" "}
          </span>
          {/* Once I have the submission data I can set the question number correctly. Hardcoded for now. */}
          In a job, I would be motivated by:
        </p>
        <p className="questionsCard--question-text">{questions[0].text}</p>

        {/* OpinionBar component here    */}
      </div>
      <p className="questionsCard--question-review-text">
        To review your previous answers, scroll back before selecting "finish".
      </p>
    </section>
  );
}
