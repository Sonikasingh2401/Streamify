import React from 'react';
import MovieCards from './MovieCards';

const MovieList = ({title,movies}) => {
    console.log(movies);

  return (
    <div className='px-6 '>
        <h1 className='p-4 text-lg md:text-3xl text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex'>
        {movies?.map((movie) => 
        (<MovieCards key={movie.id} posterPath={movie.poster_path}/> ))}
      </div>
      </div>
    </div>
  );
}

export default MovieList;
