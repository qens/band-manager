import {default as authenticationSaga} from './modules/authentication/saga';
import {default as authenticationReducer} from './modules/authentication/reducer';
import {moduleId as authenticationModuleId} from './modules/authentication/module-id';
import {combineReducers} from "redux";
import createStore from './create-store';

export function* rootSaga() {
    yield authenticationSaga();
}

export const rootReducer = combineReducers({
    [authenticationModuleId]: authenticationReducer
});

export default () => {
    const store = createStore(rootReducer, rootSaga, null);

    return store;
}