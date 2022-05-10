import React, { useState } from 'react'
import { GuessButton, TypeaheadInput } from './style'

const Input = ({ options, addGuess, isOver }) => {
  const [selection, setSelection] = useState([])

  const handleGuess = () => {
    if (selection.length !== 0) {
      setSelection([])
      addGuess(selection[0])
    }
  }

  let typeaheadOptions = options.map((option) => option.name)
  typeaheadOptions = typeaheadOptions.sort((a, b) => (a > b ? 1 : -1))

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
      >
        Guess
      </GuessButton>
    </>
  )
}

export default Input
