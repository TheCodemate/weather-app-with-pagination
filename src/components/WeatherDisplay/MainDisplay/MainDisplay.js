import React from 'react';
import { convertMilisecsToData } from 'helpers';
import {
  DayName,
  Description,
  MainDisplayContainer,
  Temperature,
  WeatherDetailContainer
} from './MainDisplay.styled';

const MainDisplay = ({ currentWeatherData }) => {
  const { dt, temp, weather, pressure, wind_speed, humidity } =
    currentWeatherData;
  const { dayName } = convertMilisecsToData(dt);
  const roundedTemp = temp.toFixed();
  const [currentWeatherDescription] = weather;
  const { icon, main, description } = currentWeatherDescription;

  return (
    <MainDisplayContainer>
      <DayName>{dayName}</DayName>
      <Description>{`${description}`}</Description>
      <img alt={main} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Temperature>{`${roundedTemp}°C`}</Temperature>
      <WeatherDetailContainer>
        <span>{'Humidity'}</span>
        <span>{`${humidity} %`}</span>
      </WeatherDetailContainer>
      <WeatherDetailContainer>
        <span>{'Pressure'}</span>
        <span>{`${pressure} hPa`}</span>
      </WeatherDetailContainer>
      <WeatherDetailContainer>
        <span>{'Wind speed'}</span>
        <span>{`${wind_speed} km/h`}</span>
      </WeatherDetailContainer>
    </MainDisplayContainer>
  );
};

export default MainDisplay;

// {
//   "dayData": {
//     "dt": 1634378400,
//     "sunrise": 1634360611,
//     "sunset": 1634399258,
//     "moonrise": 1634395800,
//     "moonset": 1634341560,
//     "moon_phase": 0.36,
//     "temp": "{day: 10.81, eve: 9.32, max: 11.11, min: 6.27, morn…}",
//     "feels_like": "{day: 9.8, eve: 8.1, morn: 5.4, night: 8.85}",
//     "pressure": 1023,
//     "humidity": 71,
//     "dew_point": 5.77,
//     "wind_speed": 5.33,
//     "wind_deg": 275,
//     "wind_gust": 11.75,
//     "weather": "[{…}]",
//     "clouds": 69,
//     "pop": 0.08,
//     "uvi": 1.74
//   }
// }
