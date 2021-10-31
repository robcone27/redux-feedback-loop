import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers } from 'redux'
import logger from 'redux-logger';
import { Provider } from 'react-redux'


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

//REDUCERS
const id = (state = 0, action) => {
    state += 1;
    return state;
};

const feeling = (state = '', action) => {
    if (action.type === 'FEELING1') {
        return action.payload;
    };
    return state;
}

const understanding = (state = '', action) => {
    if (action.type === 'UNDERSTANDING2') {
        return action.payload;
    };
    return state;
}

const supported = (state = '', action) => {
    if (action.type === 'SUPPORTED3') {
        return action.payload;
    };
    return state;
}

const comments = (state = '', action) => {
    if (action.type === 'COMMENTS4') {
        return action.payload;
    };
    return state;
}

const review = (state = '', action) => {
    if (action.type === 'REVIEW5') {
        return action.payload;
    };
    return state;
}
//STORE
const storeInstance = createStore(
    combineReducers(
        {
            id,
            feeling,
            understanding,
            supported,
            comments
        }
    ),
    applyMiddleware(
        logger
    )
);
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById("root")
);
