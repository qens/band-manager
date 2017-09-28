import {delay, takeEvery} from "redux-saga";
import { call } from 'redux-saga/effects'
import actionTypes from "./action-types";

function *login(action) {
    console.log(action);
    yield call(delay, 500)
}

export default function* () {
    yield takeEvery(actionTypes.LOGIN, login);
}