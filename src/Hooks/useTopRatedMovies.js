import {useDispatch, useSelector} from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";


const useTopRatedMovies = ()=>{

  const TopRatedMovies = useSelector((store) => store.movies.TopRatedMovies);
    //Fetch the data from TMDB API and update into store.
    const dispatch = useDispatch();
  
  const getTopRatedMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect (()=>{
    if(!TopRatedMovies) getTopRatedMovies();
  },[]);

}

export default useTopRatedMovies;