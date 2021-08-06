
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { toggleStatus, changeName, changeCityName } from '../store/profile/actions.js';
import { getUserName } from '../store/profile/selectors.js';
import { getUserCity } from '../store/profile/selectors.js';

const Profile = () => {

    const status = useSelector((state) => {
        if (state.profile.checkbox) return state.profile.checkboxStatus;
    });

    const name = useSelector(getUserName, shallowEqual);
    const city = useSelector(getUserCity, shallowEqual);

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
            dispatch(changeName(valueUserName))
        }
    }, [dispatch, valueUserName]);

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
                <span>{status}</span>
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