import React, { useContext } from 'react';
import { Context } from 'context';
import MainDisplay from './MainDisplay/MainDisplay';
import WeatherCard from './WeatherCard/WeatherCard';
import { Pagination } from 'components';
import {
  StyledWeatherDisplay,
  StyledCardsWrapper
} from '../WeatherDisplay/WeatherDisplay.styled';

const WeatherDisplay = () => {
  const { state } = useContext(Context);
  const { isLoading, dataToDisplay, currentWeatherData } = state;

  return (
    <StyledWeatherDisplay>
      {isLoading ? (
        'Loading...'
      ) : (
        <MainDisplay currentWeatherData={currentWeatherData} />
      )}
      <StyledCardsWrapper>
        {isLoading
          ? 'Loading...'
          : dataToDisplay.map((day, idx) => {
              return <WeatherCard key={`day-${idx}`} dayData={day} />;
            })}
      </StyledCardsWrapper>
      <Pagination />
    </StyledWeatherDisplay>
  );
};

export default WeatherDisplay;
