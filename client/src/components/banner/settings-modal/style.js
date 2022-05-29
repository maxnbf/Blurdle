import styled from 'styled-components'

export const Modal = styled.div`
    min-width: 90%;
    max-width: 95%;
    min-height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.darkMode ? '#211f1f' : 'white'};
    border-radius: 15px;
    padding: 15px;
    z-index: 5;
    border: 1px solid gray;
    color: ${props => props.darkMode ? 'white' : 'black'};
    overflow: hidden;
`

export const Header = styled.h4`
  text-align: center;
`

export const Close = styled.img`
  margin-left: 95%;
  height: 20px;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 20px 5px 20px;
`
export const Description = styled.div`
    font-size: 12px;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
`

export const PasswordContainer = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    margin-top: 10px;
`

export const PasswordInput = styled.input`
  width: 70%;
`

export const PasswordSubmit = styled.div`
  margin-left: 15px;
  margin-top: auto;
  margin-bottom: auto;
`
