import React from 'react';
import ReactDOM from 'react-dom';
import './client/index.css';
import App from './client/modules/app/App';
import registerServiceWorker from './client/registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import createStore from './client';
import {Provider} from "react-redux";

const store = createStore();

ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
