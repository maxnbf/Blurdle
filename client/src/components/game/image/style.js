import styled from 'styled-components'

export const BlurredImage = styled.img`

  filter: blur(${(props) => props.blur}px);
  width: 262px;
  height: 262px;
  position: relative;
  transform: rotate(${(props) => props.rotate}deg);
  pointer-events: none;
  
`

export const PersonName = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0px;
  width: 100%;
  font-size: 18px;
  font-weight: bolder;
  color: white;
  background: ${props => props.darkMode ? 'gray' : 'black'};

`

export const ImageContainer = styled.div`

  margin-bottom: 40px;
  position: relative;
  height: 280px;
  width: 280px;
  border: 10px solid ${props => props.darkMode ? 'gray' : 'black'};
  overflow: hidden;
  border-radius:10px
`
