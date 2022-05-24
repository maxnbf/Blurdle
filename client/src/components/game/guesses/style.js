import styled from 'styled-components'

export const Guess = styled.div`
  border: 1px solid ${props => props.darkMode ? 'white' : 'black'};
  padding: 3px;
  margin: 3px 0px 3px 0px;
  border-radius: 3px;
  font-size: 18px;
  padding-left: 12px;
  height: 38px;
  color: white;
  background-color: ${(props) =>
    props.correct ? 'green' : props.empty ? 'none' : props.darkMode ? 'darkgray' : 'gray'};

  opacity: ${(props) => (props.empty ? 1 : 0.5)};
  text-decoration: ${(props) => (props.correct ? 'none' : 'line-through')};
`
