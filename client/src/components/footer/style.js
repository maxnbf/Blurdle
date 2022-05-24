import styled from 'styled-components'

export const FooterContainer = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  //position: absolute;
  bottom: 10px;
  margin-top: auto;
`

export const Title = styled.span`
  font-weight: bolder;
  color: ${p => p.darkMode ? 'white' : 'black'};
`

export const Link = styled.a`
  text-decoration: underline;
`
