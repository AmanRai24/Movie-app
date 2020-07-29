
// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_To_FAVOURITES = 'ADD_To_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES'

// action creaters
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies: movies
    }
} 

export function addFavourite (movie){
    return {
        type: ADD_To_FAVOURITES,
        movie: movie
    }
}

export function removeFromFavourite (movie){
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie: movie
    }
}

export function setShowFavourite (val){
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}