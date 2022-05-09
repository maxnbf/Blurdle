import React, { useState } from 'react'
import StatsModal from './stats-modal/StatsModal';
import { BannerBorder, BannerContainer, Info, Title, Trophy } from './style';
const Banner = () => {

    const [modal, setModal] = useState(false);
    return <BannerBorder>
        <BannerContainer>
            <Info onClick = {() => setModal('info')}/>
            <Title>Blurdle</Title>
            <Trophy onClick = {() => setModal('stats')}/>
        </BannerContainer>
        {modal === 'info' && <div></div>}
        {modal === 'stats' && <StatsModal setModal={setModal}/>}
    </BannerBorder>
}

export default Banner;