import React, { useState, useEffect } from "react";
import { useRef } from "react";
import './App.css';
import Flashcard from "./components/Flashcard";
import Buttons from "./components/Buttons";
import sushiQuestions from './components/sushilist.json';

function App() {
  const [answerState, setAnswerState] = useState('empty');
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [checkboxes, setCheckboxes] = useState({});

  const [flipped, setFlipped] = useState(false);

  const inputBoxRef = useRef(null);

  const flipCard = () =>{
    setFlipped(!flipped);
  }

  const handleCheckboxUpdate = (updatedCheckboxes) => {
    setCheckboxes(updatedCheckboxes);
  };

  const handleCheckAnswer = (e) => {
    e.preventDefault();

    let isCorrect = false;

    if(currentCardIndex === 2){
      const requiredIngredients = ['tuna', 'salmon', 'yellowtail'];
      const userIngredients = val.split(/[ ,]+/).map(item => item.trim());

      isCorrect = requiredIngredients.every(ingredient =>
        userIngredients.includes(ingredient)
      );

      if(isCorrect)
      {
        setCorrectAnswer(true);
        setWrongAnswer(false);
      }else{
        setCorrectAnswer(false);
        setWrongAnswer(true);
      }

    }else if(currentCardIndex === 3){
      const requiredIngredients = ['eel', 'avocado'];
      const userIngredients = val.split(/[ ,]+/).map(item => item.trim());

      isCorrect = requiredIngredients.every(ingredient =>
        userIngredients.includes(ingredient)
      );

      if(isCorrect)
      {
        setCorrectAnswer(true);
        setWrongAnswer(false);
      }else{
        setCorrectAnswer(false);
        setWrongAnswer(true);
      }
    }else if(currentCardIndex === 4){
      if(val.toLowerCase() == 'cream cheese' || 'creamcheese'){
        setCorrectAnswer(true);
        setWrongAnswer(false);
      }else{
        setCorrectAnswer(false);
        setWrongAnswer(true);
      }
    }else if(currentCardIndex === 5){
      const requiredIngredients = ['imitation crab meat', 'cucumber', 'avocado', 'sesame seeds'];
      const selectedIngredients = Object.keys(checkboxes).filter((ingredient) => checkboxes[ingredient]);

      isCorrect = requiredIngredients.every((ingredient) => selectedIngredients.includes(ingredient));

      if (isCorrect) {
        setCorrectAnswer(true);
        setWrongAnswer(false);
      } else {
        setCorrectAnswer(false);
        setWrongAnswer(true);
      }

    }else if(sushiQuestions.sushiQuestions[currentCardIndex].answer.toLowerCase() == val.toLowerCase()){
      setCorrectAnswer(true);
      setWrongAnswer(false);
    }
    else{
      setCorrectAnswer(false);
      setWrongAnswer(true);
    }

  };

  const [val, setVal] = useState("");

  const handleTextBoxChange = (e) =>{
    if(e.target.value.trim() !==''){
      setAnswerState('filled');
    }else{
      setAnswerState('empty');
    }
    
    setVal(e.target.value);

    setCorrectAnswer(false);
    setWrongAnswer(false);

  }

  const handleNextCard = () => {
    if (currentCardIndex < sushiQuestions.sushiQuestions.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
    setVal('');
    setAnswerState('empty');

    if(currentCardIndex === 4){
      inputBoxRef.current.disabled = true;
    }
    else{
      inputBoxRef.current.disabled = false;
    }

  }

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
    setVal('');
    setAnswerState('empty');

    if(currentCardIndex === 6){
      inputBoxRef.current.disabled = true;
    }
    else{
      inputBoxRef.current.disabled = false;
    }
  }

  const handleShuffleCards = () =>{
    const randomIndex = Math.floor(Math.random() * sushiQuestions.sushiQuestions.length);
    setCurrentCardIndex(randomIndex);
    setVal('');
    setAnswerState('empty');
  }

  const currentFlashcard = sushiQuestions.sushiQuestions[currentCardIndex];

  return (
    <div>
      <div className='title-container'>
        <h1 className="title">Sushi Quiz</h1>
        <p>
          Answer the following questions for sushi roll ingredients
        </p>
        <h3>Question: {currentCardIndex+1} of {sushiQuestions.sushiQuestions.length}</h3>
      </div>
      <Flashcard
        question={currentFlashcard.question}
        answer={currentFlashcard.answer}
        flipped={flipped}
        setFlipped={setFlipped}
        currentIndex={currentCardIndex}
      />
      <form className="form-container">
        <label htmlFor="theAnswer" id="answer-label">Enter the answer here: </label>
        <input
        id="theAnswer"
        className={answerState}
        value = {val}
        onChange={handleTextBoxChange}
        ref = {inputBoxRef}
        ></input>
        <button className="submit-answer" onClick={handleCheckAnswer} >
          Check Answer
        </button>
      </form>
      <Buttons
        onPrevious={handlePreviousCard}
        onNext={handleNextCard}
        onShuffle={handleShuffleCards}
        showAnswer={flipCard}
      ></Buttons>
      <div className="answer-string">
        <h3 className={`result ${correctAnswer ? 'correct-answer' : ''}`}>Correct!</h3>
        <h3 className={`result ${wrongAnswer ? 'wrong-answer': ''}`}>Try again</h3>
      </div>
    </div>
  )
}

export default App
