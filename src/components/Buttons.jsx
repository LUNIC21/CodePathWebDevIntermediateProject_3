import React, {  useState } from "react";
import "../App.css";

const Buttons = ({ onPrevious, onNext, onShuffle, showAnswer }) =>{
    return(
        <div>
            <button className="buttons" onClick = {onPrevious}>Previous</button>
            <button className="buttons" onClick = {onNext}>Next</button>
            <button className="buttons" onClick = {onShuffle}>Shuffle</button>
            <button className="buttons show-answer" onClick = {showAnswer}>Show Answer</button>
        </div>
        )
}
export default Buttons;