import React from 'react';
import language from './language';
import {useSelector} from "react-redux";

const GPTSearchBar = () => {

  const LanguageSelector = useSelector(Store => Store.config.language);

  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='w-1/2 bg-black grid grid-cols-12 rounded-md'>
        <input type='text' 
        className='p-3 m-2 col-span-9' 
        placeholder={language[LanguageSelector].gptSearchPlaceholder}/>
        <button 
        className='p-3 m-2 col-span-3 bg-red-800 rounded-lg text-white text-xl'>{language[LanguageSelector].search}</button>
      </form>
    </div>
  );
}

export default GPTSearchBar;
