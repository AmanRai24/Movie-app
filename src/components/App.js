import React from 'react';
import { data } from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends React.Component {

          componentDidMount(){
          //API call can be perform here
          const { store } = this.props;

          //suscribe call will automatically call when we dispatch
          store.subscribe(() => {
          console.log('UPDATE');
          this.forceUpdate(); //--- forceupdate is not a good way of doing
        })

          //dispatch action
          store.dispatch({
          type: 'ADD_MOVIES',
          movies: data
        });

        console.log('STATE:',store.getState());
  }
  render() {

    const movies = this.props.store.getState();
    console.log("RENDER");
    return (
      <div className="App" >

      <Navbar />

      <div className="main" >
        <div className="tabs" >
        <div className="tab">Movies</div>
        <div className="tab">Favourites</div>
      </div>

      <div className="list">
        {/* map send every (element, index of element) in array  */}
        { movies.map( (movie,index) =>(
        <MovieCard movie ={movie} key={`movies-${index}`} />
        ))}
      </div>
    </div>
  </div>
  );
  }
}


export default App;
