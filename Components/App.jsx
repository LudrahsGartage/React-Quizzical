import React from "react"
import Home from "./Home"
import Playing from "./Playing"
import shuffle from "../Utils/Shuffle"

export default function App () {
    //set state for user journey (Home, Playing, Answered)
    //set state for current user responses
    //set state for current question and ansers
    const [screen, setScreen] = React.useState("Home")
    const [questions, setQuestions] = React.useState([])
    const [playerAnswers, setPlayerAnswers] = React.useState([])
    
    function startQuiz () {
        fetch("https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple")
            .then(res=> res.json())
            .then(data => {
                setQuestionList(data.results)
                setScreen("Playing")
            })
    }
    
    function setQuestionList (array) {
        const questionsList = array.map(item => {
            return ({
                question: item.question,
                correctAnswer: item.correct_answer,
                optionList: [...item.incorrect_answers,item.correct_answer]
            })
        })
        questionsList.forEach(question => shuffle(question.optionList))
        setQuestions(questionsList)
    }
    
    return (
        <div className="container" style={screen === "Home" ? {alignItems:"center"} : {alignItems:"start"}}>
            {screen ==="Home" && (<Home handleClick={startQuiz} />)}
            {screen ==="Playing" && (<Playing questions={questions} />)}
        </div>
    )
}