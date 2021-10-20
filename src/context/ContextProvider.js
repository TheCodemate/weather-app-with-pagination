import React, { createContext, useMemo } from 'react';
import { useWeatherAPI } from 'hooks';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const { state, dispatch } = useWeatherAPI();
  // eslint-disable-next-line
  const store = useMemo(() => ({ state, dispatch }), [state]);
  return <Context.Provider value={store}>{children}</Context.Provider>;
};
