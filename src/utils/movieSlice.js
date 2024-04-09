import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        NowPlayingMovies: null,
        trailerVideo:null,
        PopularMovies: null,
        TopRatedMovies:null,
        TVShows: null,
    },
    reducers:{
        addNowPlayingMovies: (state,action) =>{
            state.NowPlayingMovies = action.payload;
        },
        addtrailerVideo : (state,action) =>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state,action) =>{
            state.PopularMovies = action.payload;
        },
        addTopRatedMovies : (state,action) =>{
            state.TopRatedMovies = action.payload;
        },
        addTVShows : (state,action) =>{
            state.TVShows = action.payload;
        }
    },
});

export const {addNowPlayingMovies , addtrailerVideo , addPopularMovies , addTopRatedMovies , addTVShows} = movieSlice.actions;

export default movieSlice.reducer;