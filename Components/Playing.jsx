import React from "react"
import Question from "./Question"

export default function Playing (props) {
    const html = props.questions.map((element,i) => {
     return <Question data={element} key={i}/>   
    })
    
    return (
        <>
            {html}
        </>
    )
}