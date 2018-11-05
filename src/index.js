import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, document.getElementById('root'));
registerServiceWorker();
