import { db } from "../../firebase";

export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const toggleStatus = () => ({
    type: TOGGLE_CHECKBOX,
});

export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName,
});

export const CHANGE_CITY = 'PROFILE::CHANGE_CITY';
export const changeCityName = (cityName) => ({
    type: CHANGE_CITY,
    payload: cityName,
});

export const changeProfileNameWithFirebase = (newName) => async () => {
    db.ref("username").set(newName);
  };
  
  export const initProfileNameTracking = () => (dispatch) => {
    db.ref("username").on("value", (snapshot) => {
      dispatch(changeName(snapshot._delegate._node.value_));
    });
  
    db.ref("username").on("value", (snapshot) => {
      dispatch(changeName(snapshot._delegate._node.value_));
    });
  }