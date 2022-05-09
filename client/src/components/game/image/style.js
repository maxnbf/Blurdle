import blur from 'react-blur'
import styled from 'styled-components'

export const BlurredImage = styled(blur)`
    width: 280px;
    height: 280px;
    border: 9px solid grey;
    border-radius: 10px;

    margin-bottom: 40px;
    position: relative;

    > canvas {
        padding: 5px;
        margin: -9px;
        border-radius: 10px;
    }
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
    border-radius: 15px;
`