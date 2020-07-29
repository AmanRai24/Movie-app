//if action contains new state so we return that state
//if no change in state so we return curr-state 
export default function movies(state=[],action){
    if(action.type==='ADD_MOVIES'){
        return action.movies;
    }
    return state;
}