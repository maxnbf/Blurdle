import React from 'react'
import {
  BlurredImage,
  Close,
  Description,
  Header,
  ImageContainer,
  ImagesContainer,
  Info,
  Modal,
  Text
} from './style'
import xButtonWhite from '../../../x.svg'
import xButtonBlack from '../../../x2.svg'

const InfoModal = ({ setModal, darkMode }) => {
  const closeModal = () => {
    if (localStorage.getItem('new_user') === null) {
      localStorage.setItem('new_user', 'false')
    }
    setModal(false)
  }

  return (
    <Modal darkMode={darkMode}>
      <Close src={darkMode ? xButtonWhite : xButtonBlack} onClick={() => { closeModal() }} />
      <Header>How to Play</Header>
      <Description>
        Try to guess the celebrity using a blurry image of them. Each guess you
        make the image becomes less blurry!
      </Description>

      <ImagesContainer>
        <Node text={'Before first guess'} blur={12} />
        <Node text={'Before second guess'} blur={9} />
        <Node text={'Before third guess'} blur={6} />
        <Node text={'Before fourth guess'} blur={3} />
        <Node text={'Before last guess'} blur={0} />
      </ImagesContainer>

      <Info>
        All pictures and names are sourced from <a href={'https://today.yougov.com/ratings/entertainment/fame/people/all'}>yougov.com</a>, which list the most famous people, defined as the percent of people who have heard of a person. This list is for Q1 of 2022. Your options when playing blurdle.me consists of the top 1300 most famous people.
      </Info>

      <Info>
          View the settings to switch from dark mode to light mode. There is also two difficulty settings: 1. Hard Mode - when switched on you cannot scroll through the list of possible options. 2. Extreme Mode: the picture is randomly rotated 90, 180, or 270 degrees.
      </Info>
    </Modal>
  )
}

const Node = ({ text, blur }) => {
  return (
    <ImageContainer>
      <BlurredImage
        img={
          'https://ntvb.tmsimg.com/assets/assets/235135_v9_bb.jpg?w=270&h=360'
        }
        blurRadius={blur}
      ></BlurredImage>
      <Text>{text}</Text>
    </ImageContainer>
  )
}

export default InfoModal
