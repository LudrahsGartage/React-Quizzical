import React from "react"
import Home from "./Home"
import Playing from "./Playing"
import shuffle from "../Utils/Shuffle"
import { decode } from 'html-entities'


export default function App () {

    const [screen, setScreen] = React.useState("Home")
    const [questions, setQuestions] = React.useState([])
    const [playerAnswers, setPlayerAnswers] = React.useState([])
    
    function startQuiz () {
        fetch("https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple")
            .then(res=> res.json())
            .then(data => {
                setQuestionList(data.results)
                setPLayerResponseArray(data.results)
                setScreen("Playing")
            })
    }
    
    function setQuestionList (array) {
        const questionsList = array.map(item => {
            return ({
                question: decode(item.question),
                correctAnswer: item.correct_answer,
                optionList: [...item.incorrect_answers,item.correct_answer]
            })
        })
        questionsList.forEach(question => shuffle(question.optionList))
        setQuestions(questionsList)
    }
    
    function setPLayerResponseArray (array) {
        const responseList = array.map(item => {
            return ({
                question: decode(item.question),
                playerAnswer: ""
            })
        })
        setPlayerAnswers(responseList)
    }

    function handleSelectAnswer (question, answer) {
        const newPlayerAnswers = []
        playerAnswers.forEach(item => {
            if (item.question==question) {
                newPlayerAnswers.push({question: item.question, playerAnswer: answer})
            } else {
                newPlayerAnswers.push(item)
            }
        })
        setPlayerAnswers(newPlayerAnswers)
    }

    console.log(screen)

    return (
        <div className="container" style={screen === "Home" ? {alignItems:"center"} : {alignItems:"start"}}>
            {screen ==="Home" && (<Home handleClick={startQuiz} />)}
            {screen ==="Playing" && (<Playing questions={questions} screen={screen} playerAnswers={playerAnswers} handleSelectAnswer={handleSelectAnswer} />)}
        </div>
    )
}