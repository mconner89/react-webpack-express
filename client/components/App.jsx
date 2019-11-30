import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

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
const TooltipStyle = styled(ReactTooltip)`
  font-family: "fantasy";
  font-size: 24px;
  padding: 15px;
  border-radius: 8px;
`
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StyledH1 data-tip='This is a solid tooltip!'>
          This is a styled header
          <TooltipStyle style='font-size:24px' place="bottom" type="dark" effect="solid"/>
        </StyledH1>
      </div>
    )
  }
}
export default App;