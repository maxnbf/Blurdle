import React from 'react'
import {
  BlurredImage,
  Close,
  Description,
  Header,
  ImageContainer,
  ImagesContainer,
  Modal,
  Text
} from './style'
import xButton from '../../../x.svg'

const InfoModal = ({ setModal }) => {
  const closeModal = () => {
    if (localStorage.getItem('new_user') === null) {
      localStorage.setItem('new_user', 'false')
    }
    setModal(false)
  }

  return (
    <Modal>
      <Close src={xButton} onClick={() => { closeModal() }} />
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
