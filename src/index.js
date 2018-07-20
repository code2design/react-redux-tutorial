import 'babel-polyfill';
import React                            from 'react';
import {render}                         from 'react-dom';
import {Provider}                       from 'react-redux';
import configureStore                   from './store/configureStore';
import {BrowserRouter}                  from 'react-router-dom';
import App                              from './components/App';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);