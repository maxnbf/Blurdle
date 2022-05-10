import React from 'react'
import { BlurredImage, PersonName } from './style'

const Image = ({ length, img, isOver, person }) => {
  return img
    ? (
    <BlurredImage img={img} blurRadius={15 - length * 3}>
      {isOver && <PersonName>{person}</PersonName>}
    </BlurredImage>
      )
    : null
}

export default Image
