import React, { useEffect, useState } from 'react'
import { getDate, setStats } from '../../helpers/helpers'
import { options } from '../../helpers/options'
import { useToday } from '../../hooks/useToday'
import Guesses from './guesses/Guesses'
import Image from './image/Image'
import Input from './input/Input'
import Share from './share/Share'
import { Container } from './style'

const Game = ({ darkMode }) => {
  const specialMode = localStorage.getItem('special_mode') === 'true'

  const { today, addGuess } = useToday(getDate(), specialMode)
  const { person, image, guesses } = today

  const [isOver, setIsOver] = useState(false)

  if (!isOver && (guesses.includes(person) || guesses.length === 5)) {
    setIsOver(true)

    if (!specialMode) setStats(person, guesses, getDate())
  }

  useEffect(() => {
    if (!isOver && (guesses.includes(person) || guesses.length === 5)) {
      setIsOver(true)
    } else {
      setIsOver(false)
    }
  }, [guesses])

  return (
    <Container>
      <Image
        isOver={isOver}
        person={person}
        length={isOver ? 20 : guesses.length}
        img={image}
        darkMode={darkMode}
      />
      <Guesses guesses={guesses} person={person} darkMode={darkMode} />
      {isOver
        ? (
        <Share guesses={guesses} person={person} />
          )
        : (
        <Input options={options} addGuess={addGuess} isOver={isOver} specialMode={specialMode}/>
          )}
    </Container>
  )
}

export default Game
