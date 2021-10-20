import { useEffect, useReducer } from 'react';
import initialState from 'utils/initialState';
import { WeatherAppReducer } from 'reducers';
import { getWeatherApiLinkForGivenCoords, ThrowError } from 'helpers';
import ACTIONS from 'store/actions';

const useWeatherAPI = () => {
  const [state, dispatch] = useReducer(WeatherAppReducer, initialState);
  const { itemsOnPage, currentPage } = state;

  const getEntriesOnPage = (
    itemsToDisplayNumber,
    arrayToPaginate,
    actualPage
  ) => {
    const startIndex = actualPage * itemsToDisplayNumber - itemsToDisplayNumber;
    const endIndex = currentPage * itemsToDisplayNumber;
    const itemsToDisplay = arrayToPaginate.slice(startIndex, endIndex);
    return itemsToDisplay;
  };

  const setWeatherData = async ({ lat, lon }) => {
    try {
      const link = getWeatherApiLinkForGivenCoords({ lat, lon });
      const result = await fetch(link);
      ThrowError.ifStatusNotOk(result.ok);
      const data = await result.json();
      const { current, daily } = data;
      // console.log(current);
      const dataLength = daily.length;
      const totalPageNumber = parseInt(
        Math.ceil(dataLength / itemsOnPage).toFixed()
      );
      const selectedData = getEntriesOnPage(itemsOnPage, daily, currentPage);
      const requiredData = {
        data,
        dataLength,
        current,
        daily,
        selectedData,
        totalPageNumber
      };
      dispatch({
        type: ACTIONS.FETCH_WEATHER_DATA,
        payload: requiredData
      });
    } catch (err) {
      dispatch({ type: ACTIONS.FETCH_WEATHER_ERROR, payload: err.message });
    }
  };

  const onSuccess = position => {
    const data = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };

    const { lat, lon } = data;
    setWeatherData({ lat, lon });
  };

  const onError = error => {
    dispatch({ type: ACTIONS.FETCH_WEATHER_ERROR, payload: error.message });
    console.log(error);
  };

  const getWeatherData = () =>
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(onSuccess, onError)
      : dispatch({
          type: ACTIONS.DISPLAY_GEOLOCATION_NOT_AVAILABLE,
          payload: 'Geolocation is not available on this device'
        });

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line
  }, [currentPage]);

  return {
    state,
    dispatch
  };
};

export default useWeatherAPI;
