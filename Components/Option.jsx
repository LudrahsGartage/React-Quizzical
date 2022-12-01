import React from "react"

export default function Option (props) {
    
    function determineClass () {
        let style = "options "
        if (props.screen == "Playing"){
            if (props.playerResponse.playerAnswer == props.answer) {
                style = "selected"
            } 
        } else if (props.screen == "End") {
            if (props.answer == props.correctAnswer) {
                style = "correct-answer"
            } else if (props.playerResponse.playerAnswer == props.answer && props.playerResponse.playerAnswer !== props.correctAnswer) {
                style = "incorrect-answer"
            } else {
                style= "disabled-answer"
            }
        }
        return style
    }

    const callHandleClick = (e) => {
        if (props.screen == "Playing") {
            if (props.answer !== props.playerResponse.playerAnswer){
                props.handleSelectAnswer(props.question, props.answer)
            } else {
                props.handleSelectAnswer(props.question, "")
            }
        }
    }

    const classlist = `options ${determineClass()}`

    return (
        <button onClick={callHandleClick} className={classlist} >{props.answer}</button>
    )
}