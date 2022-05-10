import styled from 'styled-components'
import { FaInfoCircle, FaTrophy } from 'react-icons/fa'
import { GoGear } from 'react-icons/go'
export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  color: white;
  height: 45px;
  margin-bottom: 5px;
`

export const Trophy = styled(FaTrophy)`
  width: 25px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
`

export const Info = styled(FaInfoCircle)`
  width: 25px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  width: 25%;
`

export const Settings = styled(GoGear)`
    width: 25px;
    height: 25px;
    margin-top: auto;
    margin-bottom: auto;
`

export const Title = styled.h1`
  font-size: 35px;
  font-weight: bolder;
  width: 50%;
  text-align: center;
`

export const BannerBorder = styled.div`
  border-bottom: 2px white solid;
`

export const RightIcons = styled.div`
    justify-content: space-evenly;
    height: 45px;
    margin-bottom: 5px;
    display: flex;
    width: 25%;
`
