import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { GuessButton } from './styled';

const Input = ({options, addGuess, isOver}) => {

   
    const [selection, setSelection] = useState([]);
    
    const handleGuess = () => {
        if (selection.length !== 0) {
            setSelection([]);
            addGuess(selection[0]);
        }
    }

    const typeaheadOptions = options.map(option => option.name)
    return <>
            <Typeahead
                onChange={setSelection}
                options={typeaheadOptions}
                placeholder="Guess a player"
                selected={selection}
                id="typeahead"
                disabled={isOver}
            />
            <GuessButton onClick={() => handleGuess()}>Guess</GuessButton>
        </>
}

export default Input;