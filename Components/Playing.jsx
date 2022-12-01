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

    function getScore () {
        let score = 0
        for(let i=0; i < props.playerAnswers.length; i++) {
            if (props.questions[i].correctAnswer == props.playerAnswers[i].playerAnswer) {
                score += 1
            }
        }
        return (`${score}/${props.playerAnswers.length}`)
    }

    const endScreenButton = <button onClick={props.handleChangeScreen} className="change-screen-btn">Check Answers</button>
    const newGameDiv = (
        <div className="score-div">
            <span>You Scored {getScore()} correct answers</span>
            <button onClick={props.handleChangeScreen} className="change-screen-btn">Play Again</button>
        </div>
    )

    return (
        <>
            {html}
            {props.screen=="Playing"?endScreenButton:newGameDiv}
        </>
    )
}