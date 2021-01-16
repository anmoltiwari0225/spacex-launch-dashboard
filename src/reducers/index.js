import {FETCH_LAUNCH_REQUEST, FETCH_LAUNCH_SUCCESS, FETCH_LAUNCH_FAILURE, SET_LAUNCH_IND, SET_LANDING_IND, SET_YEAR} from '../actions/ACTION_TYPES';

const initialState = {
    isLoading: false,
    launches: [],
    launchYear: '',
    isLaunchSuccessful: '',
    isLandingSuccessful: '',
    err: ''
};

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LAUNCH_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_LAUNCH_SUCCESS:
            return {
                isLoading: false,
                launches: action.payload,
                err: ''
            };
        case FETCH_LAUNCH_FAILURE:
            return {
                isLoading: false,
                launches: [],
                err: action.payload
            };
        case SET_LAUNCH_IND:
            return {
                ...state,
                isLaunchSuccessful: action.payload
            };
        case SET_LANDING_IND:
            return {
                ...state,
                isLandingSuccessful: action.payload
            };
        case SET_YEAR:
            return {
                ...state,
                launchYear: action.payload
            };
        default:
            return state;
    }
}

export default mainReducer;