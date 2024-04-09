import {useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import {addTVShows} from "../utils/movieSlice";

const useTVShows= ()=>{
    //Fetch the data from TMDB API and update into store.
    const dispatch = useDispatch();
  
  const getTVShows = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addTVShows(json.results));
  };
  useEffect (()=>{
    getTVShows();
  },[]);

}

export default useTVShows;