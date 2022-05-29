import React, { useState } from 'react'
import { names } from '../../../helpers/options'
import { specialOptions } from '../../../helpers/special_options'
import { GuessButton, TypeaheadInput } from './style'

const Input = ({ addGuess, isOver, darkMode, specialMode }) => {
  const [selection, setSelection] = useState([])

  const handleGuess = () => {
    if (selection.length !== 0) {
      setSelection([])
      addGuess(selection[0])
    }
  }

  const specialNames = specialOptions.map(option => option.name)

  const namesList = specialMode ? specialNames : names
  const typeaheadOptions = namesList.sort((a, b) => (a > b ? 1 : -1))

  return (
    <>
      <TypeaheadInput
        onChange={setSelection}
        options={typeaheadOptions}
        placeholder="Guess a celebrity"
        dropup={true}
        selected={selection}
        minLength={1}
        disabled={isOver}
        id='typeahead'
        hardMode={localStorage.getItem('hard_mode') === 'true'}

      />
      <GuessButton
        disabled={selection.length === 0}
        onClick={() => handleGuess()}
        darkMode={darkMode}
      >
        Guess
      </GuessButton>
    </>
  )
}

export default Input
