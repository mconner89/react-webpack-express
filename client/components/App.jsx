import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 48px;
  color: dodgerblue;
  font-family: fantasy;
  :hover {
    color: limegreen;
    cursor: crosshair;
    user-select: none;
    text-shadow: 0 0 5px black;
  }
  :active {
    transform: scale(0.9, 0.9)
  }
`

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StyledH1>
          This is a styled header
        </StyledH1>
      </div>
    )
  }
}
export default App;