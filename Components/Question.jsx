import React from "react"
import Option from "./Option"

export default function Question (props) {
    const options = props.data.optionList.map((option,i) => (
    <Option 
        answer={option} 
        correctAnswer={props.data.correctAnswer} 
        key={i} 
        question = {props.data.question}
        playerResponse={props.playerResponse} 
        screen={props.screen} 
        handleSelectAnswer={props.handleSelectAnswer}/>))

    return (
        <div className="question-container">
            <h2 className="questions">{props.data.question}</h2>
            {options}
        </div>
    )
}