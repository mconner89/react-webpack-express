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
      /* May vary between 1.4em - 1.6em depending on font.*/
      /* used for smooth transition */
      font-size: 1.5em;
    }
  }
  body {
    margin: 0 auto;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;

    background: linear-gradient(0deg, rgba(150,150,150,.9) 0%, rgba(230,230,230,.8) 58%, rgba(230,230,230, .8) 100%);
    backdrop-filter: blur(3px);
    box-shadow: 0 0 3px #191919;
    a {
      color: #191919;
      text-decoration: none;
      margin: 0 2vw;
      padding: 6px 1vw;
      border-radius: 3px;
      user-select: none;
      -webkit-user-drag: none;
      :hover, :focus {
        background-color: rgba(220,220,220, .25);
        box-shadow: 0 0 5px inset rgba(0,0,0, .25);
      }

    }
  }
  p {
    white-space: auto;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Fresca', sans-serif;
  }
  hr {
    border: none;
    height: .1em;
    background: linear-gradient(0deg, rgba(255,255,255,1) 20%, rgba(25,25,25,1) 50%, rgba(255,255,255, 1) 80%);
  }
  .section {
    margin: 1em auto;
    width: 80%;
    max-width: 1200px;
    transition: width .5s;
    padding: 1em;
  }
  .page {
    padding-top: 80px;
    margin: 0 auto;
  }
  @media screen and (max-width: 640px) {
    .section {
      width: 90%;
      padding-top: .5em;
      padding-bottom: .5em
    }
  }
`

ReactDOM.render(
<React.Fragment>
  <GlobalStyle />
  <App />
</React.Fragment>, document.getElementById('app'));