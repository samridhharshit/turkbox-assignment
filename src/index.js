import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import rootReducers from './Reducers/rootReducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const store = createStore(rootReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

