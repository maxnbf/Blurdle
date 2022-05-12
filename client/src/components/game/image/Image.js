import React from 'react'
import seedrandom from 'seedrandom'
import { BlurredImage, ImageContainer, PersonName } from './style'

const Image = ({ length, img, isOver, person }) => {
  const superHardMode = localStorage.getItem('super_hard_mode') === 'true'

  const rng = seedrandom(person)

  const rotate = superHardMode ? Math.floor(rng() * 3 + 1) * 90 : 0

  img = img !== null ? img.substring(0, img.length - 6) : null

  return <ImageContainer>
          <BlurredImage src={img} blur={18 - length * 4} rotate={rotate}></BlurredImage>
          {isOver && <PersonName>{person}</PersonName>}
        </ImageContainer>
}

export default Image
