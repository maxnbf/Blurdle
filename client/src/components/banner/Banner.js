import React from 'react'

import { BannerBorder, BannerContainer, Info, RightIcons, Settings, Title, Trophy } from './style'
const Banner = ({ setModal, darkMode }) => {
  return (
    <BannerBorder darkMode={darkMode}>
      <BannerContainer darkMode={darkMode}>
        <Info onClick={() => setModal('info')} />
        <Title>Blurdle</Title>
        <RightIcons>
            <Trophy onClick={() => setModal('stats')} />
            <Settings onClick={() => setModal('settings')} />
        </RightIcons>
      </BannerContainer>
    </BannerBorder>
  )
}

export default Banner
