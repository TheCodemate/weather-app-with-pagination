import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Context } from 'context';
import { WeatherDisplay } from 'components';
import { theme } from 'styles';
import { StyledApp } from './App.styled';

const App = () => {
  const { state } = useContext(Context);
  const { hasFetchSucceded, error } = state;

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>{hasFetchSucceded ? <WeatherDisplay /> : error}</StyledApp>
    </ThemeProvider>
  );
};
export default App;
