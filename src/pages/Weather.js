
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getWeather, isError, isLoading } from '../store/weather/selectors.js';
import { sendWeatherApiRequest } from '../store/weather/actions.js';
import { getUserCity } from '../store/profile/selectors.js';

export const Weather = () => {

  const dispatch = useDispatch();
  const cityName = useSelector(getUserCity);
  const weather = useSelector(getWeather);
  const error = useSelector(isError);
  const loading = useSelector(isLoading);

  const API_ENDPOINT = "https://goweather.herokuapp.com/weather/" + cityName;

  const requestWeather = () => {
    dispatch(sendWeatherApiRequest(API_ENDPOINT));
  };

  useEffect(() => {
    requestWeather();
  }, []);


  if (loading) {
    return <div className="flexCenter"> <CircularProgress /> </div>;
  }

  if (error) {
    return (
      <div>
        <h3>Error</h3>
        <button onClick={requestWeather}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <p>{cityName}</p>
      <p>{weather['temperature']}</p>
      <p>{weather['wind']}</p>
      <p>{weather['description']}</p>
    </div>);
};
