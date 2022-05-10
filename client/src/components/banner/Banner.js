import React from 'react'

import { BannerBorder, BannerContainer, Info, Title, Trophy } from './style'
const Banner = ({ setModal }) => {
  return (
    <BannerBorder>
      <BannerContainer>
        <Info onClick={() => setModal('info')} />
        <Title>Blurdle</Title>
        <Trophy onClick={() => setModal('stats')} />
      </BannerContainer>
    </BannerBorder>
  )
}

export default Banner
