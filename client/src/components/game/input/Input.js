import React, { useState } from 'react';
import { GuessButton, TypeaheadInput } from './style';

const Input = ({options, addGuess, isOver}) => {

   
    const [selection, setSelection] = useState([]);
    
    const handleGuess = () => {
        if (selection.length !== 0) {
            setSelection([]);
            addGuess(selection[0]);
        }
    }

    var typeaheadOptions = options.map(option => option.name)
    typeaheadOptions = typeaheadOptions.sort((a, b) => (a > b) ? 1 : -1)
    return <>
            <TypeaheadInput
                onChange={setSelection}
                options={typeaheadOptions}
                placeholder="Guess a celebrity"
                selected={selection}
                id="typeahead"
                disabled={isOver}
            />
            <GuessButton disabled={selection.length === 0} onClick={() => handleGuess()}>Guess</GuessButton>
        </>
}

export default Input;