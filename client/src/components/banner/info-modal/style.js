import styled from 'styled-components'
import blur from 'react-blur'

export const Modal = styled.div`
  min-width: 90%;
  max-width: 95%;
  min-height: 375px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.darkMode ? '#211f1f' : 'white'};
  border-radius: 15px;
  padding: 15px;
  z-index: 5;
  border: 1px solid gray;
  color: ${props => props.darkMode ? 'white' : 'black'};
  overflow: hidden;
`

export const Header = styled.h4`
  text-align: center;
`

export const Close = styled.img`
  margin-left: 95%;
  height: 20px;
`

export const BlurredImage = styled(blur)`
  width: 75px;
  height: 75px;
  margin-left: auto;
  margin-right: auto;
`

export const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 10px;
`

export const Description = styled.div`
  text-align: center;
`

export const ImageContainer = styled.div`
  padding: 3px;
`

export const Text = styled.div`
  font-size: 12px;
`
