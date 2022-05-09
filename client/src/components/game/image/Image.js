import React from 'react';
import { BlurredImage } from './style';


const Image = ({length, img}) => {

    return <BlurredImage img={img} blurRadius={15 - (length * 3)}/>   
}

export default Image