
export const GET_WEATHER_REQUEST = "WEATHER::GET_WEATHER_REQUEST";
export const GET_WEATHER_SUCCESS = "WEATHER::GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILURE = "WEATHER::GET_WEATHER_FAILURE";

export const getWeatherRequest = () => ({
    type: GET_WEATHER_REQUEST,
    loading: true,
    error: null,
});

export const getWeatherSuccess = (data) => ({
    type: GET_WEATHER_SUCCESS,
    payload: data,
    loading: false,
});

export const getWeatherFailure = (err) => ({
    type: GET_WEATHER_FAILURE,
    payload: err,
    loading: false,
});

export const sendWeatherApiRequest = (API) => async (dispatch) => {
    dispatch(getWeatherRequest());
    try {
        const res = await fetch(API);
        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        const result = await res.json();
        dispatch(getWeatherSuccess(result));
    } catch (err) {
        dispatch(getWeatherFailure(err.message));
    }
};



