import React from 'react'
import seedrandom from 'seedrandom'
import { BlurredImage, ImageContainer, PersonName } from './style'

const Image = ({ length, img, isOver, person, darkMode }) => {
  const superHardMode = localStorage.getItem('super_hard_mode') === 'true'

  const rng = seedrandom(person)

  const rotate = superHardMode ? Math.floor(rng() * 3 + 1) * 90 : 0

  img = img !== null ? img.substring(0, img.length - 6) : null

  const blurmap = {
    0: 12,
    1: 9,
    2: 6,
    3: 4,
    4: 2,
    5: 0
  }

  return <ImageContainer darkMode={darkMode}>
          <BlurredImage src={img} blur={blurmap[length]} rotate={rotate}></BlurredImage>
          {isOver && <PersonName darkMode={darkMode}>{person}</PersonName>}

        </ImageContainer>
}

export default Image
