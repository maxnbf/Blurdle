import styled from 'styled-components'

export const Guess = styled.div`
  border: 1px solid white;
  padding: 3px;
  margin: 2px 0px 2px 0px;
  border-radius: 5px;
  font-size: 18px;
  padding-left: 12px;
  height: 38px;
  color: white;
  background-color: ${(props) =>
    props.correct ? 'green' : props.empty ? 'none' : 'darkgray'};

  opacity: ${(props) => (props.empty ? 1 : 0.5)};
  text-decoration: ${(props) => (props.correct ? 'none' : 'line-through')};
`
