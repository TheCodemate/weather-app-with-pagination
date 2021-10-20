import ACTIONS from './actions';

const WeatherAppReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_WEATHER_DATA:
      const { current, daily, dataLength, selectedData, totalPageNumber } =
        action.payload;
      return {
        ...state,
        dailyWeatherDataLength: dataLength,
        currentWeatherData: current,
        dailyWeatherData: daily,
        dataToDisplay: selectedData,
        totalPageNumber: totalPageNumber,
        isLoading: false
      };

    case ACTIONS.FETCH_WEATHER_ERROR:
      return {
        ...state,
        weatherData: {},
        hasFetchSucceded: false,
        isLoading: false,
        error: action.payload
      };
    case ACTIONS.DISPLAY_GEOLOCATION_NOT_AVAILABLE:
      return {
        ...state,
        weatherData: {},
        hasFetchSucceded: false,
        isLoading: false,
        error: action.payload
      };
    case ACTIONS.GO_TO_PREV_PAGE:
      return {
        ...state,
        isLoading: false,
        currentPage: state.currentPage - 1
      };
    case ACTIONS.GO_TO_NEXT_PAGE:
      return {
        ...state,
        isLoading: false,
        currentPage: state.currentPage + 1
      };

    default:
      return state;
  }
};

export default WeatherAppReducer;
