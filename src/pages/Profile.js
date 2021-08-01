
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileAction } from '../store/profile/actions.js';

const Profile = () => {
    const status = useSelector((state) => state.checkbox);
    const dispatch = useDispatch();
    const toggleCheckbox = useCallback(() => {
        dispatch(profileAction);
    }, [dispatch]);

    return (
        <div>
            <h2>Profile</h2>
            <input
                type="checkbox"
                onChange={toggleCheckbox}
            ></input>
            <span>{status}</span>
        </div>
    );
};

export default Profile;