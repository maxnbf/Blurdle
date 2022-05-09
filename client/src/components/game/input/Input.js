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
    //console.log('selection', selection)
    return <>
            <Typeahead
                onChange={setSelection}
                options={options}
                placeholder="Guess a player"
                selected={selection}
                id="typeahead"
                disabled={isOver}
            />
            <GuessButton onClick={() => handleGuess()}>Guess</GuessButton>
        </>
}

export default Input;