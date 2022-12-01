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
        fetch("https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple")
            .then(res=> res.json())
            .then(data => {
                setQuestionList(data.results)
                setPLayerResponseArray(data.results)
                setScreen("Playing")
            })
    }
    
    function setQuestionList (array) {
        const questionsList = array.map(item => {
            const optionsList = [...item.incorrect_answers,item.correct_answer]
            const cleanOptionsList = optionsList.map(item => decode(item))
            return ({
                question: decode(item.question),
                correctAnswer: decode(item.correct_answer),
                optionList: cleanOptionsList
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

    function handleChangeScreen () {
        if (screen === "Playing") {
            setScreen("End")
        } else if (screen === "End") {
            startQuiz()
        }
    }

    console.log(screen)

    return (
        <div className="container" style={screen === "Home" ? {alignItems:"center"} : {alignItems:"start"}}>
            {screen ==="Home" && (<Home handleClick={startQuiz} />)}
            {screen !=="Home" && (
            <Playing 
                questions={questions} 
                screen={screen} 
                playerAnswers={playerAnswers} 
                handleSelectAnswer={handleSelectAnswer} 
                handleChangeScreen = {handleChangeScreen}
                />)}
        </div>
    )
}