import { TOGGLE_CHECKBOX, CHANGE_NAME, CHANGE_CITY } from "./actions.js"

export const profileInitialState = {
    checkbox: false,
    checkboxStatus: "checked",
    name: "userName",
    city: "Brussels",
}

export const profileReducer = (state = profileInitialState, action) => {
    switch (action.type) {

        case TOGGLE_CHECKBOX:
            return {
                ...state,
                checkbox: !state.checkbox,
            }

        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload,
            }

        case CHANGE_CITY:
            return {
                ...state,
                city: action.payload,
            }

        default:
            return state;

    }
}