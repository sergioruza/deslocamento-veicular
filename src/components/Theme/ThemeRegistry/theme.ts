'use client';

import { Roboto } from 'next/font/google';

import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import GoogleInterFont from 'app/fonts/fonts';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});
// When needed::: first argument is needed if you have common enterprise theme, and second argument is to override your enterprise theme.
// apply fonts to all other typography options like headings, subtitles, etc...
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#bd19e6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
});

export default defaultTheme;
