import React, { useState, useEffect } from "react";
import "../App.css";
import Q6Checkbox from "./Q6Checkbox";

const Flashcard = ({ question, answer, flipped, currentIndex }) => {
    const [checkboxes, setCheckboxes] = useState({});

    const updateCheckboxes = (updatedCheckboxes) => {
        setCheckboxes(updatedCheckboxes);
      };

    return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p>{question}</p>
          {currentIndex === 5 && <Q6Checkbox updateCheckboxes={updateCheckboxes} ></Q6Checkbox>}
        </div>
        <div className="flip-card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;