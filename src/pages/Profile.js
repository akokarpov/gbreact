
import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { toggleStatus, changeCityName, changeProfileNameWithFirebase, initProfileNameTracking } from '../store/profile/actions.js';
import { getUserName, getUserCity, getCheckBoxStatus } from '../store/profile/selectors.js';

const Profile = () => {

    const status = useSelector(getCheckBoxStatus, shallowEqual);
    const name = useSelector(getUserName, shallowEqual);
    const city = useSelector(getUserCity, shallowEqual);

    const statusMessage = () => {
        if(!status) {
            return 'checked'
        }
    }

    const [valueUserName, setValueUserName] = useState('');
    const [valueCityName, setValueCityName] = useState('');

    const handleChangeUserName = useCallback((e) => {
        setValueUserName(e.target.value);
    }, []);


    const handleChangeCityName = useCallback((e) => {
        setValueCityName(e.target.value);
    }, []);

    const dispatch = useDispatch();

    const toggleCheckbox = useCallback(() => {
        dispatch(toggleStatus());
    }, [dispatch]);

    const setName = useCallback(() => {
        if (valueUserName !== '') {
            dispatch(changeProfileNameWithFirebase(valueUserName))
        }
    }, [dispatch, valueUserName]);

    useEffect(() => {
        dispatch(initProfileNameTracking());
      }, [dispatch]);

    const setCity = useCallback(() => {
        if (valueCityName !== '') {
            dispatch(changeCityName(valueCityName))
        }
    }, [dispatch, valueCityName]);


    const checkKeyUserName = (event) => {
        if (event.code === "Enter") {
            setName();
        };
    }

    const checkKeyCityName = (event) => {
        if (event.code === "Enter") {
            setCity();
        };
    }

    return (
        <div>

            <h2>Profile</h2>
            <br />
            <div>
                <label>Test checkbox: </label>
                <input
                    type="checkbox"
                    onChange={toggleCheckbox}
                ></input>
                <span>{statusMessage()}</span>
            </div>
            <br />
            <span>Name: {name}</span>
            <div>
                <input type="text" value={valueUserName} onChange={handleChangeUserName} onKeyDown={checkKeyUserName} />
                <button type="button" onClick={setName}>Set Name</button>
            </div>
            <br />
            <span>City: {city}</span>
            <div>
                <input type="text" value={valueCityName} onChange={handleChangeCityName} onKeyDown={checkKeyCityName} />
                <button type="button" onClick={setCity}>Set City</button>
            </div>

        </div>
    );
};

export default Profile;