import { createGlobalStyle } from 'styled-components';

// Extend DefaultTheme to include background and text properties
declare module 'styled-components' {
  export interface DefaultTheme {
    background?: string;
    text?: string;
  }
}

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
    background: ${({ theme }) => theme.background || '#fff'};
    color: ${({ theme }) => theme.text || '#222'};
    min-height: 100vh;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    font-family: inherit;
  }
`;

export default GlobalStyles;