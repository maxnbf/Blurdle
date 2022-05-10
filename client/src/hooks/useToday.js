import { useCallback, useEffect, useState } from 'react'
import seedrandom from 'seedrandom'
import { loadAllGuesses, saveGuesses } from '../helpers/helpers'
import { options } from '../helpers/options'

export const useToday = (todayString) => {
  const [today, setToday] = useState({
    person: null,
    image: null,
    guesses: []
  })

  const addGuess = useCallback(
    (newGuess) => {
      if (today == null) {
        return
      }

      const newGuesses = [...today.guesses, newGuess]

      setToday((prev) => ({
        person: prev.person,
        image: prev.image,
        guesses: newGuesses
      }))
      saveGuesses(todayString, newGuesses)
    },
    [today, todayString]
  )

  useEffect(() => {
    const rng = seedrandom(todayString)

    const guesses = loadAllGuesses()[todayString] ?? []
    const option = Math.floor(rng() * options.length)
    const person = options[option]

    setToday({ person: person.name, image: person.image, guesses })
  }, [todayString])

  return { today, addGuess }
}
