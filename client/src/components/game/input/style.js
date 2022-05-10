import styled from 'styled-components'
import { Typeahead } from 'react-bootstrap-typeahead'

export const GuessButton = styled.div`
  height: 38px;
  border: 1px solid white;
  padding: 3px;
  margin: 2px 0px 2px 0px;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
  color: white;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: ${(props) => (props.disabled ? 'gray' : 'green')};
`

export const TypeaheadInput = styled(Typeahead)`
  margin-top: 30px;


  > #typeahead {
        max-height: 145px !important;
        overflow: ${(props) => (props.hardMode ? 'hidden' : 'auto')} !important;
  }
`
