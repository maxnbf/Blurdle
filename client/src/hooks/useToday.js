import { useCallback, useEffect, useState } from "react";
import seedrandom from 'seedrandom'
import { loadAllGuesses, saveGuesses } from "../helpers/helpers";
import { options } from "../helpers/options";


export const useToday = (todayString) => {

    
    const [today, setToday] = useState({ person: null, guesses: [] });

    const addGuess = useCallback(
        (newGuess) => {
          if (today == null) {
            return;
          }
    
          const newGuesses = [...today.guesses, newGuess];
    
          setToday((prev) => ({ person: prev.person, guesses: newGuesses }));
          saveGuesses(todayString, newGuesses);
        },
        [today, todayString]
    );



    useEffect(() => {
        var rng = seedrandom(todayString);
        rng()

        const guesses = loadAllGuesses()[todayString] ?? [];
        const option = Math.floor(rng() * options.length)
        const person = options[option]
    
        setToday({ person: person.name, guesses });
    }, [todayString]);

    return {options, today, addGuess}
}



