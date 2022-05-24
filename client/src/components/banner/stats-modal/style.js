import styled from 'styled-components'

export const Modal = styled.div`
  min-width: 90%;
  max-width: 95%;
  height: 375px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.darkMode ? '#211f1f' : 'white'};;
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

export const Statistics = styled.div`
  display: flex;
`

export const StatisticContainer = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
`

export const Stat = styled.div`
  font-size: 12px;
`

export const Value = styled.div`
  font-size: 24px;
  font-weight: bolder;
`

export const Close = styled.img`
  margin-left: 95%;
  height: 20px;
`

export const Distribution = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding: 1rem;
  border-radius: 15px;
`

export const Bar = styled.div`
  height: ${(props) => (props.height === 0 ? 25 : props.height + 25)}px;
  background: ${(props) =>
    props.height === 0 || isNaN(props.height) ? 'none' : 'green'};
`

export const Label = styled.div`
  display: block;
  font-size: 14px;
  margin-top: 0.5rem;
  text-align: center;
`
export const BarContainer = styled.div`
  border-bottom: 2px solid white;
  display: flex;
  flex-direction: column;
  height: 125px;
  justify-content: flex-end;
  width: 2rem;
  text-align: center;
`
