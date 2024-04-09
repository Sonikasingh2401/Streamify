import React from 'react';
import MovieList from './MovieList';
import {useSelector} from "react-redux";


const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    movies.NowPlayingMovies && (
      <div className='bg-slate-800'>
        <div className='px-4 -mt-44 relative z-20'>
          <MovieList title = {"Now Playing"} movies = {movies.NowPlayingMovies}/>
          <MovieList title = {"Top Rated"} movies = {movies.TopRatedMovies}/>
          <MovieList title = {"Popular"} movies = {movies.PopularMovies}/>
          <MovieList title = {"TV Shows"} movies = {movies.TVShows}/>
        </div>
      </div>
  ));
}

export default SecondaryContainer;

