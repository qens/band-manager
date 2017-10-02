import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

export default (reducer, saga, emmiterMiddleware) =>
{
    const sagaMiddleware = createSagaMiddleware();

    // const store = createStore(reducer, undefined, applyMiddleware(emmiterMiddleware, sagaMiddleware));
    const store = createStore(reducer, undefined, applyMiddleware(logger, sagaMiddleware));

    console.log('saga: ', saga);
    sagaMiddleware.run(saga);

    return store;
};
