export const loadAllGuesses = () => {
    const storedGuesses = localStorage.getItem("guesses");
    return storedGuesses != null ? JSON.parse(storedGuesses) : {};
}
  
export const saveGuesses = (dayString, guesses) => {
    const allGuesses = loadAllGuesses();
    localStorage.setItem(
      "guesses",
      JSON.stringify({
        ...allGuesses,
        [dayString]: guesses,
      })
    );
  }
  

export const getDate = () => {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();


    return `${day < 10 && 0}${day}/${month < 10 && 0}${month}`
}

export const setStats = (person, guesses, date) => {
    var played = localStorage.getItem('played');
    var wins = localStorage.getItem('wins');
    var previousPlay = localStorage.getItem('previousPlay');
    var currStreak = localStorage.getItem('currStreak');
    var bestStreak = parseInt(localStorage.getItem('bestStreak'));
    var distr = JSON.parse(localStorage.getItem('distr'));

    var winToday = guesses.includes(person);

    //to prevent double counting with double renders??
    if (previousPlay !== date) {
        played = played === null ? 1 : parseInt(played) + 1
        wins = wins === null ? winToday ? 1 : 0 : parseInt(wins) + 1
        currStreak = currStreak === null ? winToday ? 1 : 0 : winToday && previousPlay !== null && wasYesterday(previousPlay, date) ?  parseInt(currStreak) + 1 :  parseInt(currStreak);
        bestStreak =  bestStreak !== null && parseInt(currStreak) > parseInt(bestStreak) ?  parseInt(currStreak) : currStreak;


        if (distr === null && winToday) {
            distr = { [guesses.indexOf(person)+1]: 1 }
        } else {
            distr = { ...distr, [guesses.indexOf(person)+1]: distr[guesses.indexOf(person)+1] + 1}
        }

        previousPlay = date;
    }


    localStorage.setItem('played', played)
    localStorage.setItem('wins', wins,)
    localStorage.setItem('previousPlay', date);
    localStorage.setItem('currStreak', currStreak)
    localStorage.setItem('bestStreak', bestStreak)
    localStorage.setItem('distr', JSON.stringify(distr))



}


export const wasYesterday = (previousPlay, todaysDate) => {

    const todaysDay = getDayValue(todaysDate);
    const todaysMonth = getMonthValue(todaysDate);
    const previousPlayDay = getDayValue(previousPlay);
    const previousPlayMonth = getMonthValue(previousPlay);


    if (todaysDay !== 1) {
        return todaysDay - 1 === previousPlayDay && todaysMonth === previousPlayMonth
    } else {
        
        switch (todaysMonth) {
            case 1: 
                return previousPlayDay === 31 && previousPlayMonth === 12;
            case 2: 
                return previousPlayDay === 31 && previousPlayMonth === 1;
            case 3: 
                return previousPlayDay === 28 && previousPlayMonth === 2;
            case 4: 
                return previousPlayDay === 31 && previousPlayMonth === 3;
            case 5:
                return previousPlayDay === 30 && previousPlayMonth === 4;
            case 6: 
                return previousPlayDay === 31 && previousPlayMonth === 5;
            case 7: 
                return previousPlayDay === 30 && previousPlayMonth === 6;
            case 8: 
                return previousPlayDay === 31 && previousPlayMonth === 7;
            case 9: 
                return previousPlayDay === 31 && previousPlayMonth === 8;
            case 10: 
                return previousPlayDay === 30 && previousPlayMonth === 9;
            case 11: 
                return previousPlayDay === 31 && previousPlayMonth === 10;
            case 12: 
                return previousPlayDay === 30 && previousPlayMonth === 11;
            default: 
                return false;
              
        }
    }
}

export const getDayValue = (date) =>{
    return parseInt(date.substring(0, 2))
}

export const getMonthValue = (date) =>{
    return parseInt(date.substring(3, 5))
}