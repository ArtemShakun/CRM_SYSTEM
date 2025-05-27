import type { PaletteOptions } from '@mui/material';

const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#4D7CFE',
    light: 'rgba(77, 124, 254, 0.15)',
    contrastText: '#fff',
  },
  secondary: {
    main: '#FE4D97',
    light: 'rgba(254, 77, 151, 0.15)',
    contrastText: '#fff',
  },
  success: {
    main: '#6DD230',
    light: 'rgba(109, 210, 48, 0.15)',
  },
  info: {
    main: '#2CE5F6',
    light: 'rgba(44, 229, 246, 0.15)',
  },
  warning: {
    main: '#FFAB2B',
    light: 'rgba(255, 171, 43, 0.15)',
  },
  error: {
    main: '#FE4D97',
    light: 'rgba(254, 77, 151, 0.15)',
  },
  background: {
    default: '#F8FAFB',
    paper: '#F2F4F6',
  },
  text: {
    primary: '#252631',
    secondary: '#778CA2',
    disabled: '#5B5B5B',
  },
  grey: {
    100: '#E8ECEF',
    200: '#98A9BC',
    300: '#778CA2',
  },
};

export default palette;
