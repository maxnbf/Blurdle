import { useCallback, useEffect, useState } from 'react'
import seedrandom from 'seedrandom'
import { loadAllGuesses, saveGuesses } from '../helpers/helpers'
import { options } from '../helpers/options'
import { specialOptions } from '../helpers/special_options'

export const useToday = (todayString, specialMode) => {
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
      saveGuesses(todayString, newGuesses, specialMode)
    },
    [today, todayString]
  )

  useEffect(() => {
    const rng = seedrandom(todayString)

    const num = rng()

    let guesses, person
    if (!specialMode) {
      guesses = loadAllGuesses(specialMode)[todayString] ?? []
      const option = Math.floor(num * options.length)
      person = options[option]
    } else {
      guesses = loadAllGuesses(specialMode)[todayString] ?? []
      const option = Math.floor(num * 81)
      person = specialOptions[option]
    }

    setToday({ person: person.name, image: person.image, guesses })
  }, [todayString, specialMode])

  return { today, addGuess }
}
