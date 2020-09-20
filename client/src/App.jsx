import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles.js';

import { ThemeProvider } from 'styled-components';
import themes from './styles/themes.js';
import Typography from './pages/Typography.jsx';

export default function App() {
  const [themeMode, setThemeMode] = useState('dark');
  return (
    <ThemeProvider theme={{ mode: themeMode, ...themes}}>
      <GlobalStyles themes={themes}/>
      <div className='page'>
        <button
        style={{position: 'fixed', top: '.5em', right: '.5em'}}
          onClick={()=>{setThemeMode(themeMode === 'light' ? 'dark' : 'light')}}
        >{themeMode[0].toUpperCase() + themeMode.slice(1)}</button>
        <div className='section'>
          <h1>Hello from React / Webpack / Express </h1>
          <hr></hr>
          <Typography/>
        </div>
      </div>
    </ThemeProvider>
  )
}