import styled from 'styled-components'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 280px;

  //https://www.ios-resolution.com/

  //iphone 12/13 + Pro
  @media (max-width: 395px) and (max-height: 850px) {
    transform: scale(0.9);
    margin-top: 0px;
  }

  //iphone X, 12/13 mini
  @media (max-width: 380px) and (max-height: 820px) {
    transform: scale(0.8);
    margin-top: -20px;
  }

  //iphone 6/7/8 plus
  @media (max-width: 420px) and (max-height: 740px) {
    transform: scale(0.75);
    margin-top: -50px;
  }

  //iphone 6/7/8
  @media (max-width: 380px) and (max-height: 670px) {
    transform: scale(0.7);
    margin-top: -50px;
  }

  //iphone 5/SE
  @media (max-width: 325px) and (max-height: 575px) {
    transform: scale(0.6);
    margin-top: -90px;
  }

  //default for desktop
  transform: scale(0.8);
  margin-top: -30px;
`
