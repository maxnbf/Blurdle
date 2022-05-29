import React from 'react'
import seedrandom from 'seedrandom'
import { BlurredImage, ImageContainer, PersonName } from './style'

const Image = ({ length, img, isOver, person, darkMode }) => {
  const superHardMode = localStorage.getItem('super_hard_mode') === 'true'

  const rng = seedrandom(person)

  const rotate = superHardMode ? Math.floor(rng() * 3 + 1) * 90 : 0

  const specialMode = localStorage.getItem('special_mode') === 'true'
  if (!specialMode) { img = img !== null ? img.substring(0, img.length - 6) : null }

  const blurmap = {
    0: specialMode ? 16 : 12,
    1: specialMode ? 13 : 9,
    2: specialMode ? 11 : 6,
    3: specialMode ? 7 : 4,
    4: specialMode ? 5 : 2,
    5: specialMode ? 0 : 0
  }

  return <ImageContainer darkMode={darkMode}>
          <BlurredImage src={img} blur={blurmap[length]} rotate={rotate} specialMode={specialMode}></BlurredImage>
          {isOver && <PersonName darkMode={darkMode}>{person}</PersonName>}
        </ImageContainer>
}

export default Image
