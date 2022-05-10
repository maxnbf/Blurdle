export const loadAllGuesses = () => {
  const storedGuesses = localStorage.getItem('guesses')
  return storedGuesses != null ? JSON.parse(storedGuesses) : {}
}

export const saveGuesses = (dayString, guesses) => {
  const allGuesses = loadAllGuesses()
  localStorage.setItem(
    'guesses',
    JSON.stringify({
      ...allGuesses,
      [dayString]: guesses
    })
  )
}

export const getDate = () => {
  const dateObj = new Date()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()

  if (day < 10 && month < 10) return `0${day}/0${month}`
  else if (day < 10) return `0${day}/${month}`
  else if (month < 10) return `${day}/0${month}`
  else return `${day}/${month}`
}

export const setStats = (person, guesses, date) => {
  let played = localStorage.getItem('played')
  let wins = localStorage.getItem('wins')
  let previousPlay = localStorage.getItem('previousPlay')
  let currStreak = localStorage.getItem('currStreak')
  let bestStreak = localStorage.getItem('bestStreak')
  let distr = JSON.parse(localStorage.getItem('distr'))

  const winToday = guesses.includes(person)

  // to prevent double counting with double renders??
  if (previousPlay !== date) {
    played = played === null ? 1 : parseInt(played) + 1

    if (wins === null) {
      wins = winToday ? 1 : 0
    } else {
      wins = winToday ? parseInt(wins) + 1 : wins
    }

    if (currStreak === null) {
      currStreak = winToday ? 1 : 0
    } else {
      if (winToday) {
        if (previousPlay !== null && wasYesterday(previousPlay, date)) {
          currStreak = parseInt(currStreak) + 1
        } else {
          currStreak = 1
        }
      } else {
        currStreak = 0
      }
    }

    if (bestStreak === null) {
      bestStreak = currStreak
    } else {
      if (currStreak > parseInt(bestStreak)) {
        bestStreak = currStreak
      }
    }

    const numGuesses = guesses.indexOf(person) + 1
    if (distr === null && winToday) {
      distr = { [numGuesses]: 1 }
    } else if (numGuesses !== 0) {
      distr = {
        ...distr,
        [numGuesses]:
          distr[numGuesses] === undefined ? 1 : parseInt(distr[numGuesses]) + 1
      }
    }

    previousPlay = date
  }

  localStorage.setItem('played', played)
  localStorage.setItem('wins', wins)
  localStorage.setItem('previousPlay', date)
  localStorage.setItem('currStreak', currStreak)
  localStorage.setItem('bestStreak', bestStreak)
  localStorage.setItem('distr', JSON.stringify(distr))
}

export const wasYesterday = (previousPlay, todaysDate) => {
  const todaysDay = getDayValue(todaysDate)
  const todaysMonth = getMonthValue(todaysDate)
  const previousPlayDay = getDayValue(previousPlay)
  const previousPlayMonth = getMonthValue(previousPlay)

  if (todaysDay !== 1) {
    return (
      todaysDay - 1 === previousPlayDay && todaysMonth === previousPlayMonth
    )
  } else {
    switch (todaysMonth) {
      case 1:
        return previousPlayDay === 31 && previousPlayMonth === 12
      case 2:
        return previousPlayDay === 31 && previousPlayMonth === 1
      case 3:
        return previousPlayDay === 28 && previousPlayMonth === 2
      case 4:
        return previousPlayDay === 31 && previousPlayMonth === 3
      case 5:
        return previousPlayDay === 30 && previousPlayMonth === 4
      case 6:
        return previousPlayDay === 31 && previousPlayMonth === 5
      case 7:
        return previousPlayDay === 30 && previousPlayMonth === 6
      case 8:
        return previousPlayDay === 31 && previousPlayMonth === 7
      case 9:
        return previousPlayDay === 31 && previousPlayMonth === 8
      case 10:
        return previousPlayDay === 30 && previousPlayMonth === 9
      case 11:
        return previousPlayDay === 31 && previousPlayMonth === 10
      case 12:
        return previousPlayDay === 30 && previousPlayMonth === 11
      default:
        return false
    }
  }
}

export const getDayValue = (date) => {
  return parseInt(date.substring(0, 2))
}

export const getMonthValue = (date) => {
  return parseInt(date.substring(3, 5))
}
