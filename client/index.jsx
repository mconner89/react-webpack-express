import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import { createGlobalStyle } from 'styled-components'

/* To manipulate global elements like body, h1, img, ...
   Must also use React.Fragment and put <GlobalStyle />
   at the top-level render*/

  const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`

ReactDOM.render(
<React.Fragment>
  <GlobalStyle />
  <App />
</React.Fragment>, document.getElementById('app'));