import React from "react"

export default function Option (props) {
    
    function determineClass () {
        let style = "options "
        if (props.screen === "Playing"){
            if (props.playerResponse.answer === props.answer) {
                style = "selected"
            } 
        } else if (props.screen === "Submitted") {
            if (props.playerResponse.answer === props.answer && props.playerResponse.answer === props.correctAnswer) {
                style = "correct-answer"
            } else if (props.playerResponse.answer === props.answer && props.playerResponse.answer !== props.correctAnswer) {
                style = "incorrect-answer"
            }
        }
        return style
    }

    const callHandleClick = (e) => {
        props.handleSelectAnswer(props.question, props.answer)
    }

    const classlist = `options ${determineClass()}`

    return (
        <button onClick={callHandleClick} className={classlist} >{props.answer}</button>
    )
}