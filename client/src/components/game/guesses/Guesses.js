import React, { useEffect } from 'react'
import { Guess } from './style';

const Guesses = ({guesses}) => {

    return Array.from(Array(5).keys()).map(index => { return <Guess>{guesses[index]}</Guess>})
}

export default Guesses;