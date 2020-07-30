import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// function logger(obj,next,action)
// logger(obj)(next)(action)
// obj ={dispatch, getState}
const logger = function({ dispatch, getState}){
    return function(next){
        return function(action){
            console.log("ACTION_TYPE:",action.type);
            next(action); //pass to another MW if present else go to dispatch
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logger));
//console.log('store:',store);
// console.log('BEFORE STATE:',store.getState());

// //dispatch send action to reducer
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman'}]
// })
// console.log('AFTER STATE:',store.getState());
ReactDOM.render(<App store={store} />,document.getElementById('root'));


