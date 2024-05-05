import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import { GPT_BG_URL } from '../utils/constant';

const GPTSearch = () => {
  return (
    <div>
        <div className='absolute -z-10 opacity-85 from-black'>
            <img className = 'w-screen'
            src={GPT_BG_URL}
            alt='logo'>
            </img>
        </div>
    <GPTSearchBar/>
    <GPTMovieSuggestion/>
    </div>
  );
}

export default GPTSearch;
