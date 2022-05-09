import React, { useState } from 'react'
import InfoModal from './info-modal/InfoModal';
import StatsModal from './stats-modal/StatsModal';
import { BannerBorder, BannerContainer, Info, Title, Trophy } from './style';
const Banner = ({setModal}) => {

 
    return <BannerBorder>
        <BannerContainer>
            <Info onClick = {() => setModal('info')}/>
            <Title>Blurdle</Title>
            <Trophy onClick = {() => setModal('stats')}/>
        </BannerContainer>
     
    </BannerBorder>
}

export default Banner;