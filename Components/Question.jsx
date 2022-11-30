import React from "react"
import Option from "./Option"

export default function Question (props) {
    const options = props.data.optionList.map((option,i) => <Option answer={option} key={i}/>)
    
    return (
        <div className="question-container">
            <h2 className="questions">{props.data.question}</h2>
            {options}
        </div>
    )
}