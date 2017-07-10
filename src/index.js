import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Basket from './basket';
import Form from './form';
import About from './about';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render( <App />
	,	
	document.getElementById('main')
	);

registerServiceWorker();
