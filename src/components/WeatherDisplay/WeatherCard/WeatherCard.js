import React from 'react';
import { convertMilisecsToData, getWeatherApiIconLink } from 'helpers';
import { StyledWeatherCard } from './WeatherCard.styled';
import { DataContainerRow } from 'styles/global.styled';

const WeatherCard = ({ dayData }) => {
  const { temp, weather, dt } = dayData;
  const { dayName } = convertMilisecsToData(dt);
  const { day, night } = temp;
  const [weatherDescription] = weather;
  const { icon, main } = weatherDescription;
  const iconSrc = getWeatherApiIconLink(icon);

  return (
    <StyledWeatherCard>
      <DataContainerRow>{dayName}</DataContainerRow>
      <DataContainerRow>
        <img alt={main} src={iconSrc} />
      </DataContainerRow>
      <DataContainerRow>{main}</DataContainerRow>
      <DataContainerRow>{`${day.toFixed()}°C / ${night.toFixed()}°C`}</DataContainerRow>
    </StyledWeatherCard>
  );
};

export default WeatherCard;
