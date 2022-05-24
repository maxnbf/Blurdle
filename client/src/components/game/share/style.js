import styled from 'styled-components'

export const ShareButton = styled.div`
  padding: 3px;
  margin: 2px 0px 2px 0px;
  font-size: 18px;
  text-align: center;
  color: white;

  height: 38px;
  border: 1px solid white;
  border-radius: 3px;
  background-color: grey;
  margin-top: 30px;
`

export const ShareModal = styled.div`
  width: 350px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: grey;
  border-radius: 15px;
`

export const CopiedModal = styled.div`
  width: 350px;
  height: 90px;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  background-color: #211f1f;
  border-radius: 15px;
  border: 1px solid gray;
  overflow: hidden;
`

export const Close = styled.img`
  margin-left: 93%;
  height: 20px;
  margin-top: 10px;
`

export const Text = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  color: white;
  margin-bottom: 20px;
`
