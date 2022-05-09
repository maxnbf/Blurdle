import styled from 'styled-components'
import { FaInfoCircle, FaTrophy } from 'react-icons/fa'
export const BannerContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    color: white;
    height: 45px;
    border-bottom: 3px white solid;
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
`

export const Title = styled.h1`
    font-size: 35px;
    font-weight: bolder;
`