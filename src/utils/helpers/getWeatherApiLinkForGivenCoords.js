const getWeatherApiLinkForGivenCoords = ({ lat, lon }) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=222c3faeb744d95be26173eaebf8636a`;

  //Force error to test what happens if data cannot be fetched
  // return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=222c3faeb744d95be26173aebf8636a`;
};

export default getWeatherApiLinkForGivenCoords;
