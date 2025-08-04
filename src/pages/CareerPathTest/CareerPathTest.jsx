import Header from "../../templates/Header/Header";
import InfoCard from "../../templates/InfoCard/InfoCard";
import "./CareerPathTest.css";
import backgroundImage from "../../assets/images/discover-journey-maze.svg";
import clipboardIcon from "../../assets/images/clipboard-question.svg";
import stopwatchIcon from "../../assets/images/stopwatch.svg";
import scissorsIcon from "../../assets/images/scissor-cutting.svg";

export default function CareerPathTest() {
  const infoCards = [
    {
      title: "24 questions",
      text: "Answer 24 questions about your working style and career preferences.",
      iconImage: clipboardIcon,
      iconBackgroundColor: "#fad0a9",
      iconBorderColor: "#f79b44",
    },
    {
      title: "2 minutes",
      text: "Gain insights into your future career in just 2 minutes.",
      iconImage: stopwatchIcon,
      iconBackgroundColor: "#dccbf1",
      iconBorderColor: "#8336e7",
    },
    {
      title: "Personalised advice",
      text: "Receive personalised advice to guide you on your next steps.",
      iconImage: scissorsIcon,
      iconBackgroundColor: "#fcedb6",
      iconBorderColor: "#f6c516",
    },
  ];

  return (
    <>
      <Header
        title="Career path test"
        text="Discover careers that match your skills and personality"
        backgroundImage={backgroundImage}
      />

      <section className="careerPathTest--infoCards-container">
        {infoCards.map((card) => (
          <InfoCard
            key={card.title}
            title={card.title}
            text={card.text}
            iconImage={card.iconImage}
            iconBackgroundColor={card.iconBackgroundColor}
            iconBorderColor={card.iconBorderColor}
          />
        ))}
      </section>

      <section className="careerPathTest--intro">
        <p>
          We've analysed data from thousands of our members who work in graduate
          roles across a range of sectors to understand which personalities,
          skills and values best fit each career path.
        </p>
        <p>
          Take this test to understand what career path you might be suited to
          and how to get started.
        </p>
      </section>
    </>
  );
}
