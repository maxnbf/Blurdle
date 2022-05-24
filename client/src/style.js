import styled from 'styled-components'

export const AppContainer = styled.div`
    background: ${props => props.darkMode ? '#121213' : 'white '};
    height: 100vh;
    overflow-y: overlay;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
`
