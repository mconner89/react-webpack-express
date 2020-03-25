import React from 'react';
import styled from 'styled-components';
import faker from 'faker';
import Typography from './Typography.jsx';

const Section = styled.div.attrs({className:'section'})`
  box-shadow: 0 0 5px #000;
  margin-bottom: 2em;
  border-radius: 6px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: new Array(4).fill('text'),
    };
  }

  componentDidMount() {
    console.log(window.location.pathname)
  }
  render() {
    return (
      <React.Fragment>
        <nav>
          <a href='/home'>Home</a>
          <a href='#link2'>Link 2</a>
          <a href='#link3'>Link 3</a>
        </nav>
        <div className='page'>
          <div className='section'>
            <h1>Hello from React / Webpack / Express </h1>
            <hr></hr>
            <Typography/>
          </div>

            {this.state.items.map((e, i) =>
              <Section key={e+i}>
                <p>{faker.lorem.paragraphs(2)}</p>
              </Section>)}
        </div>
      </React.Fragment>
    )
  }
}
export default App;