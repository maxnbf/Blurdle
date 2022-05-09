import styled from 'styled-components'

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 280px;
    margin-top: 40px;
    
    @media (max-width: 767px) {
        margin-top: 75px;
    }


    @media (max-width: 380px) {       
        margin-top: -40px;
        transform: scale(.75);
    }

`