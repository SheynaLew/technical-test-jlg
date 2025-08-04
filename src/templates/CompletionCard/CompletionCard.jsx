import completionImage from "../../assets/images/graduation.svg";
import BasicButton from "../../sharedComponents/BasicButton/BasicButton";
import "./CompletionCard.css";

export default function CompletionCard({ date, viewResults }) {
  return (
    <section className="completionCard-container">
      <div className="completionCard-image-container">
        <img
          src={completionImage}
          alt="Completion image showing a diploma, champagne, mortarboard and a certificate in a cartoon style"
          className="completionCard-image"
        />
      </div>
      <div className="completionCard-text-container">
        <h3 className="completionCard-text-title">Complete on {date}</h3>
        <p className="completionCard-text-description">
          Well done on completing your test. You can view the results now.
        </p>
        <BasicButton
          text="View results"
          width="6rem"
          onBtnClick={viewResults}
        />
      </div>
    </section>
  );
}
