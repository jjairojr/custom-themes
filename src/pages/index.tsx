import React, { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Switch from 'react-switch';
import { combineTheme, dark, light } from '../styles/themes';
import GlobalStyles from '../styles/global';

const Home: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light));

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch checked={theme.title === 'dark'} onChange={toggleTheme} />
      <div>Custom Themes</div>
    </ThemeProvider>
  );
};

export default Home;
