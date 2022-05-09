import React, { useState } from 'react'
import Blur from 'react-blur';
import { toast } from 'react-toastify';
import { getDate, setStats } from '../../helpers/helpers';
import { options } from '../../helpers/options';
import { useToday } from '../../hooks/useToday';
import Guesses from './guesses/Guesses';
import Image from './image/Image';
import Input from './input/Input';
import Share from './share/Share';
import { Container } from './style';

const Game = () => {

    
    console.log(getDate())

    const { today, addGuess } = useToday(getDate());
    const { person, image, guesses } = today;

    const [isOver, setIsOver] = useState(false)

    console.log(person, guesses)
    if (!isOver && (guesses.includes(person) || guesses.length === 5)) {
        setIsOver(true);

        setStats(person, guesses, getDate())
    }


    return <Container>
        <Image length={isOver ? 15 : guesses.length} img={image}/>
        <Guesses guesses={guesses} /> 
        
        {isOver ? <Share guesses={guesses} person={person}/> : <Input options={options} addGuess={addGuess} isOver={isOver}/>}

    </Container>
}

export default Game;