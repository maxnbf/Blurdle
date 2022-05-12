import styled from 'styled-components'

export const BlurredImage = styled.img`

  filter: blur(${(props) => props.blur}px);
  width: 262px;
  height: 262px;
  position: relative;
  transform: rotate(${(props) => props.rotate}deg);
  
`

export const PersonName = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0px;
  width: 100%;
  font-size: 18px;
  font-weight: bolder;
  color: white;
  background: gray;

`

export const ImageContainer = styled.div`

  margin-bottom: 40px;
  position: relative;
  height: 280px;
  width: 280px;
  border: 10px solid grey;
  overflow: hidden;
  border-radius:10px
`
