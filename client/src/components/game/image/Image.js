import React from 'react'
import seedrandom from 'seedrandom'
import { BlurredImage, PersonName } from './style'

const Image = ({ length, img, isOver, person }) => {
  const superHardMode = localStorage.getItem('super_hard_mode') === 'true'

  const rng = seedrandom(person)

  const rotate = superHardMode ? Math.floor(rng() * 3 + 1) * 90 : 0
  return img
    ? (
    <BlurredImage img={img} blurRadius={24 - length * 6} rotate={rotate}>
      {isOver && <PersonName>{person}</PersonName>}
    </BlurredImage>
      )
    : null
}

export default Image
