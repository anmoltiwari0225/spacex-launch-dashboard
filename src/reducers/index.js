import {createStore} from 'redux';

import {FETCH_LAUNCH_REQUEST, FETCH_LAUNCH_SUCCESS, FETCH_LAUNCH_FAILURE} from '../actions'

const store = createStore(reducer);
const initialState = {
    isLoading: false,
    launches: [],
    err: ''
};

const reducer = (state = initialState, action) => {
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
        default:
            return;
    }
}