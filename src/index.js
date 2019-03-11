import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    Provider
} from 'react-redux';
import rootSaga from './sagas';
import configureStore, { sagaMiddleware } from './store'
import registerServiceWorker from './registerServiceWorker';

let store = configureStore();

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
