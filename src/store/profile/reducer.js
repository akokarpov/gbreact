import { TOGGLE_CHECKBOX } from "./actions.js"

export const profileInitialState = {
    checkbox: " not checked",
}

export const profileReducer = (state = profileInitialState, action) => {
    switch (action.type) {

        case TOGGLE_CHECKBOX:

            if (state.checkbox === " not checked") {
                state.checkbox = " checked";
            } else {
                state.checkbox = " not checked";
            }
            return {
                checkbox: state.checkbox,
            }

        default: {
            return state;
        }
    }
}