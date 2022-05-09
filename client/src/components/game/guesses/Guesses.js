import React from 'react'
import { Guess } from './style';

const Guesses = ({guesses, person}) => {

    return Array.from(Array(5).keys()).map(index => { return <Guess correct={guesses[index]===person}>{guesses[index]}</Guess>})
}

export default Guesses;