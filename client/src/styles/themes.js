import theme from 'styled-theming';

export default {
  background: theme('mode', {
    light: '#FAFAFF',
    dark: '#20262C'
  }),
  color: theme('mode', {
    dark: '#DDD',
    light: '#222'
  }),
  shadowLight: theme('mode', {
    dark: '#161C22',
    light: '#E6ECF6'
  }),
  shadowDark: theme('mode', {
    dark: '#0C1218',
    light: '#D4DAE4'
  }),
  button: {
    hover: theme('mode', {
      light: '#E2E8F2',
      dark: '#181E24'
    })
  },
}