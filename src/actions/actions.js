import axios from 'axios';

import {FETCH_LAUNCH_REQUEST, FETCH_LAUNCH_SUCCESS, FETCH_LAUNCH_FAILURE, SET_LAUNCH_IND, SET_LANDING_IND, SET_YEAR, SET_SELECT_ACTION} from './ACTION_TYPES';

export const fetchLaunchRequest = () => {
    return {
        type: FETCH_LAUNCH_REQUEST,
    };
};

export const fetchLaunchSuccess = (launches) => {
    return {
        type: FETCH_LAUNCH_SUCCESS,
        payload: launches
    };
};

export const fetchLaunchFailure = (err) => {
    return {
        type: FETCH_LAUNCH_FAILURE,
        payload: err
    };
};

export const setIsLaunchSuccessfulValue = (value) => {
    return {
        type: SET_LAUNCH_IND,
        payload: value
    };
}

export const setIsLandingSuccessfulValue = (value) => {
    return {
        type: SET_LANDING_IND,
        payload: value
    };
}

export const setLaunchYear = (year) => {
    return {
        type: SET_YEAR,
        payload: year
    };
}

export const setSelectAction = (val) => {
    return {
        type: SET_SELECT_ACTION,
        payload: val
    };
}

export const fetchLaunch = () => {
    return (dispatch, getState) => {
        dispatch(fetchLaunchRequest);
        const { launchYear, isLaunchSuccessful, isLandingSuccessful } = getState();
        let URL;
        if (launchYear !== '' && isLaunchSuccessful !== '' && isLandingSuccessful !== '') {
            URL = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${isLaunchSuccessful}&land_success=${isLandingSuccessful}&launch_year=${launchYear}`;
        } else if (launchYear !== '' && isLaunchSuccessful !== '' && isLandingSuccessful === '') {
            URL = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${isLaunchSuccessful}&launch_year=${launchYear}`;
        } else if (launchYear !== '' && isLandingSuccessful !== '' && isLaunchSuccessful === '') {
            URL = `https://api.spacexdata.com/v3/launches?limit=100&land_success=${isLandingSuccessful}&launch_year=${launchYear}`;
        } else if (launchYear !== '' && isLandingSuccessful === '' && isLaunchSuccessful === '') {
            URL = `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${launchYear}`;
        } else if (launchYear === '' && isLandingSuccessful !== '' && isLaunchSuccessful !== '') {
            URL = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${isLaunchSuccessful}&land_success=${isLandingSuccessful}`;
        } else if (launchYear === '' && isLandingSuccessful !== '' && isLaunchSuccessful === '') {
            URL = `https://api.spacexdata.com/v3/launches?limit=100&land_success=${isLandingSuccessful}`;
        } else if (launchYear === '' && isLandingSuccessful === '' && isLaunchSuccessful !== '') {
            URL = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${isLaunchSuccessful}`;
        } else {
            URL = `https://api.spacexdata.com/v3/launches?limit=100`;
        }

        axios.get(URL)
        .then(res => {
            const launches = res.data;
            dispatch(fetchLaunchSuccess(launches));
        })
        .catch(err => {
            const errMsg = err.message;
            dispatch(fetchLaunchFailure(errMsg));
        })
    }
}
