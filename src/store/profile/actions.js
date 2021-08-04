
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const toggleStatus = () => ({
    type: TOGGLE_CHECKBOX,
});

export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName,
  });
  