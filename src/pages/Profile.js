
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { toggleStatus, changeName } from '../store/profile/actions.js';
import { getUserName } from '../store/profile/selectors.js';

const Profile = () => {

    const status = useSelector((state) => {
        if (state.profile.checkbox) return state.profile.checkboxStatus;
    });

    const name = useSelector(getUserName, shallowEqual);

    const [value, setValue] = useState('');

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const dispatch = useDispatch();

    const toggleCheckbox = useCallback(() => {
        dispatch(toggleStatus());
    }, [dispatch]);

    const setName = useCallback(() => {
        if (value !== '') {
            dispatch(changeName(value))
        }
    }, [dispatch, value]);


    const checkKey = (event) => {
        if (event.code === "Enter") {
            setName();
        };
    }

    return (
        <div>

            <h2>Profile</h2>

            <div>
                <label>Test checkbox: </label>
                <input
                    type="checkbox"
                    onChange={toggleCheckbox}
                ></input>
                <span>{status}</span>
            </div>

            <span>Name: {name}</span>

            <div>
                <input type="text" value={value} onChange={handleChange} onKeyDown={checkKey} />
                <button type="button" onClick={setName}>Set Name</button>
            </div>

        </div>
    );
};

export default Profile;