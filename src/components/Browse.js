import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useTVShows from '../Hooks/useTVShows';
import GPTSearch from './GPTSearch';
import {useSelector} from "react-redux";


const Browse = () => {

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTVShows();

  return (
    <div>
      <Header/>
      {showGptSearch ? (<GPTSearch/>) : (
      <>
        <MainContainer/>
        <SecondaryContainer/>
      </>
      )
      }     
    </div>
  );
};

export default Browse;
