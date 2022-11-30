import React from "react"
import Option from "./Option"

export default function Question (props) {
    const options = props.data.optionList.map((option,i) => <Option answer={option} correctAnswer={props.data.correctAnswer} key={i} playerResponse={props.playerResponse} screen={props.screen}/>)
    return (
        <div className="question-container">
            <h2 className="questions">{props.data.question}</h2>
            {options}
        </div>
    )
}