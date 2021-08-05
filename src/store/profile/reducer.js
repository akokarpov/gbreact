import { TOGGLE_CHECKBOX, CHANGE_NAME } from "./actions.js"

export const profileInitialState = {
    checkbox: false,
    checkboxStatus: "checked",
    name: "userName",
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

        default:
            return state;

    }
}