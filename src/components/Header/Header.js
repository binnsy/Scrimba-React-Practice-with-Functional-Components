import React from 'react'
// import './../../style.css'


function Header() {
  const date = new Date()
  const first = "Alice"
  const hours = date.getHours()
  let timeOfDay
  const styles = {
      fontSize: 50
    }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }



  return (
    <header className="header">
    <h1 style={styles}> My name is {`${first}`} and this is my header. It is about {date.getHours() % 12} o'clock! Good {timeOfDay}!</h1>
    </header>
  )
}

export default Header
