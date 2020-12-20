//fakemovie data
import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard.js/MovieCard';
import './MovieLists.css';

const MovieLists = () => {

  const [movies,setMovies]=useState([])
  
  useEffect(() => {
    fetch('http://localhost:8000/movies')
    .then(res=> res.json())
    .then (data=> setMovies(data))
  },[]);
    
    return (
        <div>
             <h2 className="text-warning mt-2"> 
                Trending Movies
            </h2>
            <ul>
                
            </ul>
               {
                    movies.map((movie) =>
                       <MovieCard
                         movieId={movie._id}
                         name={movie.name}
                         availableSeats={movie.availabeSeats}
                         seats={movie.bookedSeats}
                       />
                     )
               }
        </div>
    );
};

export default MovieLists;