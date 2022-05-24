import React, { useState } from 'react'
import { names } from '../../../helpers/options'
import { GuessButton, TypeaheadInput } from './style'

const Input = ({ options, addGuess, isOver, darkMode }) => {
  const [selection, setSelection] = useState([])

  const handleGuess = () => {
    if (selection.length !== 0) {
      setSelection([])
      addGuess(selection[0])
    }
  }

  const typeaheadOptions = names.sort((a, b) => (a > b ? 1 : -1))

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
