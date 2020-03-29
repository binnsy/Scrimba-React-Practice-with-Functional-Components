import React from 'react'

function Joke(props) {
let question

  if (question === "") {
    question = ""
  }

  return (
    <div className="joke">
    <div style={{display: props.question ? "block" : "none"}}>Question:{props.question}</div>
    <div style={{color: !props.question && "888888"}}>PunchLine:{props.punchLine}</div>
    </div>
  )
}

export default Joke
