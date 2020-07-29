import React from 'react';
import { data } from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions";

class App extends React.Component {

          componentDidMount(){
          //API call can be perform here
          const { store } = this.props;

          //suscribe call will automatically call when we dispatch
          store.subscribe(() => {
          console.log('UPDATE');
          this.forceUpdate(); //forceupdate is not a good way of doing
        })

          //dispatch action
          store.dispatch(addMovies(data));

        console.log('STATE:',store.getState());
  }

   // check is movie is fav or not
   isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if(index !== -1){
      console.log("Found fav. movie");
      return true;
    }
    return false;

  }

  //change between tab movies and fav
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourite(val));
  }

  render() {

    //const movies = this.props.store.getState();
    const { list, favourites, showFavourites } = this.props.store.getState();
    console.log("RENDER",this.props.store.getState());
    //if showFavourites= true so displayMovie have fav list else it have all movies list
    const diaplayMovies = showFavourites ? favourites : list;
    return (
      <div className="App" >

      <Navbar />

      <div className="main" >
        <div className="tabs" >
        <div className={`tab ${showFavourites ? '': 'active-tabs' }`} onClick={() => this.onChangeTab(false) }>Movies</div>
        <div className={`tab ${showFavourites ? 'active-tabs':'' }`} onClick={ () => this.onChangeTab(true) }>Favourites</div>
      </div>

      <div className="list">
        {/* map send every (element, index of element) in array  */}
        { diaplayMovies.map( (movie,index) =>(
          <MovieCard 
            movie ={movie} 
            key={`movies-${index}`} 
            dispatch={this.props.store.dispatch} 
            isFavourite= {this.isMovieFavourite(movie)}
          />
        ))}
      </div>
      {/* if no movie to diplay it will show MESSAGE elso msg is hide and movie display */}
      { diaplayMovies.length === 0 ? <div className="no-movies">No movies in Favourites!</div> : null } 
    </div>
  </div>
  );
  }
}


export default App;
