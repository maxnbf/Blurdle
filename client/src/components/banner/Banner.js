import React, { useState } from 'react'
import { BannerContainer, Info, Title, Trophy } from './styled';
const Banner = () => {

    const [modal, setModal] = useState(false);
    return <BannerContainer>
        <Info onClick = {() => setModal('info')}/>
        <Title>Blurdle</Title>
        <Trophy onClick = {() => setModal('stats')}/>

        {modal === 'info' && <div></div>}
        {modal === 'stats' && <div></div>}
    </BannerContainer>
}

export default Banner;