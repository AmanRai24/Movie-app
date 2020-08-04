import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk  from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// using curring

    // const logger = function({ dispatch, getState}){
    //     return function(next){
    //         return function(action){
    //             console.log("ACTION_TYPE:",action.type);
    //             next(action); //-- pass to another MW if present else go to dispatch
    //         }
    //     }
    // }

// diff to call function
const logger = ({ dispatch, getState}) => (next) => (action) => {
    //console.log("ACTION_TYPE:",action.type);
    if(typeof action !== 'function'){
        console.log("ACTION_TYPE:",action.type);
    }
    next(action); // pass to another MW if present else go to dispatch
}

//const store = createStore(rootReducer, applyMiddleware(logger));
//console.log('store:',store);
// console.log('BEFORE STATE:',store.getState());

// //dispatch send action to reducer
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman'}]
// })
// console.log('AFTER STATE:',store.getState());

// const thunk = ({ dispatch, getState}) => (next) => (action) => {
//     if(typeof action === 'function'){
//         action(dispatch);
//         return;
//     }
//     next(action); // pass to another MW if present else go to dispatch
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// context is user to passs the props globally so we not need to meniton it in every component
// export const StoreContext = createContext();
// class Provider extends React.Component {
//     render(){
//         const { store } = this.props;
//         return(
//             <StoreContext.Provider value={store}>
//                 {this.props.children}
//             </StoreContext.Provider>
//         );
//     }
// }

// const connectedComponent = connect(callback)(App);
    // export function connect(callback) {
    //     return function (Component) {
    //       class ConnectedComponent extends React.Component {
    //         constructor(props) {
    //           super(props);
    //           this.unsubscribe = this.props.store.subscribe(() => {
    //             this.forceUpdate();
    //           });
    //         }

    //         componentWillUnmount() {
    //           this.unsubscribe();
    //         }
    //         render() {
    //           const { store } = this.props;
    //           const state = store.getState();
    //           const dataToBeSentAsProps = callback(state);

    //           return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
    //         }
    //       }

    //       class ConnectedComponentWrapper extends React.Component {
    //         render() {
    //           return (
    //             <StoreContext.Consumer>
    //               {(store) => {
    //                 return <ConnectedComponent store={store} />;
    //               }}
    //             </StoreContext.Consumer>
    //           );
    //         }
    //       }
    //       return ConnectedComponentWrapper;
    //     };
    //   }

//ReactDOM.render(<App store={store} />,document.getElementById('root'));
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById('root')
);

