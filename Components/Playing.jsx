import React from "react"
import Question from "./Question"

export default function Playing (props) {
    const html = []
    //using for loop instead of map to pass the given array index for to player response and question.
    for (let i=0; i<props.questions.length; i++) {
        html.push(
        <Question 
            data={props.questions[i]} 
            playerResponse={props.playerAnswers[i]} 
            screen={props.screen} 
            key={i} 
            handleSelectAnswer={props.handleSelectAnswer}/>)
    }

    return (
        <>
            {html}
        </>
    )
}