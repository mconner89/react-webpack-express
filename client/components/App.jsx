import React from 'react';
import styled from 'styled-components';
import faker from 'faker';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: new Array(10).fill('text')
    };
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <a href='#link1'>Link 1</a>
          <a href='#link2'>Link 2</a>
          <a href='#link3'>Link 3</a>
        </nav>

        <div className='page'>
          <div className='section'>
            <h1>
              Hello from React / Webpack / Express
            </h1>
            {this.state.items.map(() => <p>{faker.lorem.paragraphs(2)}</p>)}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default App;