import styled from 'styled-components'

export const ShareButton = styled.div`
    padding: 3px;
    margin: 2px 0px 2px 0px;
    font-size: 18px;
    text-align: center;
    color: white;

    height: 38px;
    border: 1px solid white;
    border-radius: 5px;
    background-color: grey;
`

export const ShareModal = styled.div`
    width: 350px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background: grey;
    border-radius: 15px;
`