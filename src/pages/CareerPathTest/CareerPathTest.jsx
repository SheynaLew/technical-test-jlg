import { useState, useEffect } from "react";
import Header from "../../templates/Header/Header";
import InfoCard from "../../templates/InfoCard/InfoCard";
import "./CareerPathTest.css";
import backgroundImage from "../../assets/images/discover-journey-maze.svg";
import clipboardIcon from "../../assets/images/clipboard-question.svg";
import stopwatchIcon from "../../assets/images/stopwatch.svg";
import scissorsIcon from "../../assets/images/scissor-cutting.svg";
import { getQuestions } from "../../services/api";

const getUserFromURL = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("user") || "default";
};

export default function CareerPathTest() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user] = useState(getUserFromURL());

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

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Remember to add submissions to the API call below (working on getting questions first)
        const [questionsData] = await Promise.all([getQuestions(user)]);

        setQuestions(questionsData);
        console.log("Questions loaded:", questionsData);
      } catch (error) {
        setError("Failed to load data: " + error.message);
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user]);

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

        {loading && (
          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              backgroundColor: "#e3f2fd",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <p>Loading questions and submissions...</p>
            <p style={{ fontSize: "0.9rem", color: "#666" }}>
              This may take up to 30 seconds but will be with you shortly.
            </p>
          </div>
        )}

        {error && (
          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              backgroundColor: "#ffebee",
              color: "#c62828",
              borderRadius: "8px",
            }}
          >
            <p>
              <strong>Error:</strong> {error}
            </p>
          </div>
        )}

        {!loading && !error && (
          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              backgroundColor: "#e8f5e8",
              borderRadius: "8px",
            }}
          >
            <p>
              <strong>Data loaded successfully!</strong>
            </p>
            <p>Questions: {questions.questions[0].text}</p>
          </div>
        )}
      </section>
    </>
  );
}
