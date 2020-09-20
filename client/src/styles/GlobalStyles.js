import { createGlobalStyle } from 'styled-components'

/*
  To manipulate global elements like body, h1, img, ...
  Put <GlobalStyles /> at the top-level render
*/

export default createGlobalStyle`
  :root {
    font-family: 'Rokkitt', serif;
    color: ${p=>p.themes.color};

  }
  ::selection {
    background: #00E150;
    color: #000;
  }
  * {
    box-sizing: border-box;
  }

  html {
    /* For smooth font transition between screen sizes*/
    font-size: calc(1em + .70vw);
    @media screen and (min-width: 70em) {
      font-size: 1.5em;
    }
  }

  body {
    margin: 0;
    transition: background-color .4s, color .4s;
    background: ${p=>p.themes.background};
    color: ${p=>p.themes.color};
  }

  ::-webkit-scrollbar { width: .4em; }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #222 -50%, #00E150 50%, #222 150%);
    border-radius: .2em;
    :hover {
      background: linear-gradient(90deg, #222 -50%, #00BE2D 50%, #222 150%);
    }
  }

  h1,h2,h3,h4,h5,h6 { font-family: 'Quicksand', sans-serif; }

  hr {
    border: none;
    border-radius: .075em;
    height: .1em;
    background: ${p=>p.themes.color};
    transition: .4s;
  }
  button {
    all: unset;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    padding: .25em .5em;
    background: ${p=>p.themes.background};
    box-shadow: -3px -3px 12px ${p=>p.theme.shadowDark},
                2px 2px 12px ${p=>p.theme.shadowLight};
    border-radius: .25em;
    border: 1px solid transparent;
    user-select: none;
    :hover {
      background: ${p=>p.themes.button.hover};
    }
    :focus {
      border: 1px solid ${p=>p.themes.color};

    }
    :active {
      background: ${p=>p.themes.button.hover};
      box-shadow: -2px -2px 3px ${p=>p.theme.shadowDark},
                  1px 1px 3px ${p=>p.theme.shadowLight};
      transform: scale(.95);
      transition: transform .2s;

    }
  }
  .page { margin: 0 auto; }

  .section {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    max-width: 1200px;
    transition: width .5s;
    padding: 1em;
    @media screen and (max-width: 640px) {
      width: 100%;
      padding-top: .5em;
      padding-bottom: .5em;
    }
  }

`