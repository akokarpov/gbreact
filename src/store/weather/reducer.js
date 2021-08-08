
import { GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from "./actions.js";

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
}

const initialState = {
    weather: {},
    request: STATUSES.IDLE,
    error: null,
    loading: false,
};


export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
                loading: action.loading,
                error: action.error,
            };
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                weather: action.payload,
                request: STATUSES.SUCCESS,
                loading: action.loading,
            };
        case GET_WEATHER_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
                loading: action.loading,
            };
        default:
            return state;
    }
};

