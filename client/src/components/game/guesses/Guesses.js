import React from 'react'
import { Guess } from './style'

const Guesses = ({ guesses, person, darkMode }) => {
  return Array.from(Array(5).keys()).map((index) => {
    return (
      <Guess
        key={index}
        correct={guesses[index] === person}
        empty={!!guesses[index]}
        darkMode={darkMode}
      >
        {guesses[index]}
      </Guess>
    )
  })
}

export default Guesses
