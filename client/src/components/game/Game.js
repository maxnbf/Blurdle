import React, { useState } from 'react'
import Blur from 'react-blur';
import { toast } from 'react-toastify';
import { getDate, setStats } from '../../helpers/helpers';
import { useToday } from '../../hooks/useToday';
import Guesses from './guesses/Guesses';
import Image from './image/Image';
import Input from './input/Input';
import Share from './share/Share';
import { Container } from './style';

const Game = () => {

    
    console.log(getDate())

    const { options, today, addGuess } = useToday(getDate());
    const { person, guesses } = today;

    const [isOver, setIsOver] = useState(false)

    if (!isOver && (guesses.includes(person?.name) || guesses.length === 5)) {
        setIsOver(true);

        setStats(person, guesses, getDate())
    }

    return <Container>
        <Image length={isOver ? 15 : guesses.length} img={person?.img}/>
        <Guesses guesses={guesses} /> 
        
        {isOver ? <Share guesses={guesses} person={person?.name}/> : <Input options={options} addGuess={addGuess} isOver={isOver}/>}
        {isOver && <div>you win</div>}

    </Container>
}

export default Game;