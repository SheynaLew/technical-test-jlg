import { useState, useEffect } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import "./OpinionBar.css";

export default function OpinionBar({ questionId, onAnswer, existingAnswer }) {
  const [value, setValue] = useState(
    existingAnswer ? existingAnswer.toString() : ""
  );
  const [isAnswering, setIsAnswering] = useState(false);

  useEffect(() => {
    if (existingAnswer) {
      setValue(existingAnswer.toString());
    } else {
      setValue("");
    }
    setIsAnswering(false);
  }, [questionId, existingAnswer]);

  const handleValueChange = (newValue) => {
    setValue(newValue);
    setIsAnswering(true);

    setTimeout(() => {
      if (onAnswer && questionId) {
        onAnswer(questionId, parseInt(newValue));
      }
    }, 200);
  };

  return (
    <div className="opinion-bar">
      <RadioGroup.Root
        className="radio-group"
        value={value}
        onValueChange={handleValueChange}
        disabled={isAnswering}
      >
        <div className="radio-options">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((option) => (
            <RadioGroup.Item
              key={option}
              value={option.toString()}
              className="radio-item"
            >
              <RadioGroup.Indicator className="radio-indicator" />
            </RadioGroup.Item>
          ))}
        </div>
        <div className="labels">
          <span className="label-left">Strongly disagree</span>
          <span className="label-right">Strongly agree</span>
        </div>
      </RadioGroup.Root>
    </div>
  );
}
