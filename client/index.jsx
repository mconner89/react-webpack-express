import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import { createGlobalStyle } from 'styled-components'

/* To manipulate global elements like body, h1, img, ...
   Must also use React.Fragment and put <GlobalStyle />
   at the top-level render*/

  const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: .5em;
  }
  ::-webkit-scrollbar-track {
    background: linear-gradient(90deg, #FFF -75%, #000 50%, #FFF 175%);
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #FFF -75%, #00E150 50%, #FFF 175%);
    border-radius: 2px;
  }
  * {
    font-family: 'Rokkitt', serif;
    word-spacing: .1em;
  }
  html {
    font-size: calc(1em + .70vw);
    @media screen and (min-width: 70em) {
      font-size: 1.4em;
    }
  }
  body {
    margin: 0;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;

    background-color: #ffffff;
    box-shadow: 0 0 3px #191919;
    a {
      color: #191919;
      text-decoration: none;
      margin: 0 2vw;
      padding: 6px 1vw;
      :hover {
        background-color: #F0F0F0;
      }
    }
  }
  p {
    white-space: auto;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Fresca', sans-serif;
  }
  .page {
    padding-top: 60px;
    max-width: 1200px;
  }
  .section {
    margin: 0 auto;
    width: 80%;
  }
  @media screen and (max-width: 640px) {
    .section {
      width: 94%;
    }
  }
`

ReactDOM.render(
<React.Fragment>
  <GlobalStyle />
  <App />
</React.Fragment>, document.getElementById('app'));