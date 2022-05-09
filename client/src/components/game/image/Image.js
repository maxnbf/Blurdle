import React from 'react';
import { BlurredImage } from './style';


const Image = ({length, img}) => {

    return img ? <BlurredImage img={img} blurRadius={15 - (length * 3)}/> : null
}

export default Image