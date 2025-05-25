import type { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      accent: string;
      border: string;
      card: string;
    };
    font: {
      family: string;
      size: string;
      weight: string;
    };
  }
}

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#181818',
    text: '#fff',
    primary: '#90caf9',
    secondary: '#ffb74d',
    accent: '#f06292',
    border: '#333',
    card: '#232323',
  },
  font: {
    family: "'Roboto', sans-serif",
    size: '16px',
    weight: '400',
  },
};

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#fff',
    text: '#333',
    primary: '#1976d2',
    secondary: '#424242',
    accent: '#ff4081',
    border: '#e0e0e0',
    card: '#f5f5f5',
  },
  font: {
    family: "'Roboto', sans-serif",
    size: '16px',
    weight: '400',
  },
};



