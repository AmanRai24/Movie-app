import { combineReducers } from 'redux';
import { ADD_MOVIES, ADD_To_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES, ADD_SEARCH_RESULTS, ADD_MOVIE_TO_LIST } from '../actions';
//if action contains new state so we return that state
//if no change in state so we return curr-state 
// export default function movies(state=[],action){
//     if(action.type==='ADD_MOVIES'){
//         return action.movies;
const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}
export function movies (state = initialMoviesState, action) {
    // if(action.type === ADD_MOVIES) {
    //     return {
    //         ...state, //spread operation on obj (add all state data i.e (list,fav))
    //         list: action.movies  //(change list )
    //     }
    // }
    // return state;

    //In REACT WE USE SWITCH case generally
    //console.log("MOVIES REDUCER");
    
    switch(action.type) {
        case ADD_MOVIES:
            return {
                ...state, 
                list: action.movies  //movies id pass from action
            }
        case ADD_To_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites] //add selected movie to first index and after that add all other movie
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list]
            }
        default:
            return state;
        }
    }
    

        const initialSearchState = {
            result : {},
            showSearchResults: false,
        };

        export function search(state = initialSearchState, action ){
            //console.log("SEARCH REDUCER");
            //return state;
            switch(action.type) {
                case ADD_SEARCH_RESULTS:
                    return{
                        ...state,
                        result: action.movie,
                        showSearchResults: true
                    }
                case ADD_MOVIE_TO_LIST:
                    return {
                        ...state,
                        showSearchResults: false
                    }
                default:
                    return state;
            }
        }
        
        //at begning rootReducer is call and rootreducer say that (movies : handle by moviesreducer) & (search will handle by search reducer)
        // const initialRootState = {
        //     movies : initialMoviesState,
        //     search : initialSearchState
        // };
        // export default function rootReducer(state = initialRootState, action){
        //     return {
        //         movies : movies(state.movies, action),
        //         search : search(state.search, action)
        //     }
        // }
        
        //it is an redux property wich automatically comboine state
        //there can be only one DEFAULT method in reducer will extract by index.js file
        export default combineReducers({
            movies,
            search
        }); 
