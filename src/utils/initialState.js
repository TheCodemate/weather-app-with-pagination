const initialState = {
  isLoading: true,
  hasFetchSucceded: true, 
  currentWeatherData: {},
  dailyWeatherData: [],
  dailyWeatherDataLength: 0,
  dataToDisplay: [],
  itemsOnPage: 2,
  currentPage: 1,
  error: ''
};

export default initialState;
