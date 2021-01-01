import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './utils/reducer';
import jwtDecode from 'jwt-decode';
import { setCurrentUser,setAuthorizationToken } from './utils/actions';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

if (localStorage.access) {
    setAuthorizationToken(localStorage.access);
    // prevent someone from manually setting a key of 'jwtToken' in localStorage
    try {
        store.dispatch(setCurrentUser(jwtDecode(localStorage.access)));
    } catch(e) {
        store.dispatch(setCurrentUser({}))
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
