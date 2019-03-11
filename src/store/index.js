import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import * as reducers from '../reducers'
const logger = store => next => action => {
    if (typeof action === 'function') console.log('dispatching a function');
    else console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

const createSoreWithMiddleware = applyMiddleware(...middlewares)(createStore);


export default function configureStore(initialState) {
    const reducer = combineReducers(reducers);
    return createSoreWithMiddleware(reducer, initialState);
}
