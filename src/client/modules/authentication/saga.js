import {delay} from "redux-saga";
import {call, put, takeEvery} from 'redux-saga/effects'
import actionTypes from "./action-types";

function* login(action) {
    console.log('saga', action);
    yield call(delay, 500);
    yield put({type: actionTypes.LOGIN_SUCCESS, username: action.username});
}

export default function* () {
    yield takeEvery(actionTypes.LOGIN, login);
}