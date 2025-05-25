import { useState } from "react";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";
import styled from "styled-components";

const ToggleButton = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  z-index: 1000;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary};
  }
`;

const AppWrapper: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ToggleButton onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </ToggleButton>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
};

export default AppWrapper;
