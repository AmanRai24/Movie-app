import { ADD_MOVIES, ADD_To_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions';
//if action contains new state so we return that state
//if no change in state so we return curr-state 
// export default function movies(state=[],action){
//     if(action.type==='ADD_MOVIES'){
//         return action.movies;
const initialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
}
export default function movies (state = initialMovieState, action) {
    // if(action.type === ADD_MOVIES) {
    //     return {
    //         ...state, //spread operation on obj (add all state data i.e (list,fav))
    //         list: action.movies  //(change list )
    //     }
    // }
    // return state;

    //In REACT WE USE SWITCH case generally

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
        default:
            return state;
        }
}