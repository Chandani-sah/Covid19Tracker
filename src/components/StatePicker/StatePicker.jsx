import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchState } from '../../api';

import styles from './StatePicker.module.css';

const StatePicker = ({ handleStateChange }) => {
    const [fetchedState, setFetchedState] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedState(await fetchState());
        }

        fetchAPI();
    }, [setFetchedState]);

    

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleStateChange(e.target.value)}>
                <option value="">Select state</option>
                {fetchedState.map((state, i) => <option key={i} value={state}>{state}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default StatePicker;