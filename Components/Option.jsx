import React from "react"

export default function Option (props) {
    console.log(props)
    return (
        <button className="options">{props.answer}</button>
    )
}