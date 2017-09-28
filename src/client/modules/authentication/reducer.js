import actionTypes from './action-types';
// import { Map, List, fromJS } from 'immutable';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            console.log('reducer', action);
            return {username: action.username};
        case actionTypes.LOGIN_SUCCESS:
            console.log('reducer', action);
            return {username: action.username};
        default:
            return state;
    }
}