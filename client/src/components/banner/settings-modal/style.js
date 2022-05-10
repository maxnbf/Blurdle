import styled from 'styled-components'

export const Modal = styled.div`
    max-width: 95%;
    min-height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #211f1f;
    border-radius: 15px;
    padding: 15px;
    z-index: 5;
    border: 1px solid gray;
    color: white;
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
