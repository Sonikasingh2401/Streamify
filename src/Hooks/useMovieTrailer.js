import {useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addtrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{

    //Fetch the movies video data and stores it into redux store.
  const dispatch = useDispatch();
  
    const getMovieVideos = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        console.log(json);

        const FilteredData = json.results.filter((video) => video.type === "Trailer");
        const Trailer = FilteredData.length ? FilteredData[0] : json.results[0];
        console.log(Trailer);
        dispatch(addtrailerVideo(Trailer));
    };
    useEffect(() =>{
        getMovieVideos();

    }, []);

};

export default useMovieTrailer;