import React from "react"

export default function Home (props) {
    return (
        <>
            <h1 className="title">Quizzical</h1>
            <p className="description">Test your knowledge!</p>
            <button onClick={props.handleClick} className="start-game">Start Quiz</button>
        </>
    )
}