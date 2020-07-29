import { ADD_MOVIES } from '../actions';
//if action contains new state so we return that state
//if no change in state so we return curr-state 
// export default function movies(state=[],action){
//     if(action.type==='ADD_MOVIES'){
//         return action.movies;
const initialMovieState = {
    list: [],
    favourites: []
}
export default function movies (state = initialMovieState, action) {
    if(action.type === ADD_MOVIES) {
        return {
            ...state, //spread operation on obj (add all state data i.e (list,fav))
            list: action.movies  //(change list )
        }
    }
    return state;
}