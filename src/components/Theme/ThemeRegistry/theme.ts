'use client';

import { Roboto } from 'next/font/google';

import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

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
