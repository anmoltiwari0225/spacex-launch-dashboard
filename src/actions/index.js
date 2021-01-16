export const FETCH_LAUNCH_REQUEST = 'FETCH_LAUNCH_REQUEST';
export const FETCH_LAUNCH_SUCCESS = 'FETCH_LAUNCH_SUCCESS';
export const FETCH_LAUNCH_FAILURE = 'FETCH_LAUNCH_FAILURE';

const fetchLaunchRequest = () => {
    return {
        type: FETCH_LAUNCH_REQUEST
    };
};

const fetchLaunchSuccess = (launches) => {
    return {
        type: FETCH_LAUNCH_SUCCESS,
        payload: launches
    };
};

const fetchLaunchFailure = (err) => {
    return {
        type: FETCH_LAUNCH_FAILURE,
        payload: err
    };
};
