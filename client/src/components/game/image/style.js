import blur from 'react-blur'
import styled from 'styled-components'

export const BlurredImage = styled(blur)`
    width: 280px;
    height: 280px;
    border: 9px solid grey;
    border-radius: 10px;

    > canvas {
        padding: 5px;
        margin: -9px;
        border-radius: 10px;
    }
`