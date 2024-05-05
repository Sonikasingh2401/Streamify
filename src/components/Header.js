import React from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch} from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';
//import language from './language';

const Header = () => {

  const dispatch = useDispatch();   
  const navigate = useNavigate();

  const user = useSelector(store =>store.user);
  const showgptPage = useSelector(store =>store.gpt.showGptSearch);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      

    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect (()=>{
    const unsubscribe  = onAuthStateChanged(auth, (user) => {    // whenever user sign up or sign in this will call out. it is like a event listener keeps a track of it.
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL,}));
        navigate("/browse");
        
      } else {                                // when the user is Sign out this will call.
        dispatch(removeUser());
        navigate("/login");
      }
    });
// It will unsubsribe when the component is unmounts.
    return () => unsubscribe();

  },[]);  

  const handleGPTSearchClick =()=>{
    // Toggle the GPT Search bar 
    dispatch(toggleGPTSearchView());
  }

  const handlelanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }


  return (
    <div className=' w-screen absolute  p-3 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <h1 className='p-4 text-4xl text-red-600 font-extrabold font-serif'>STREAMIFY</h1> 
      {user &&(
      <div className='flex h-14 pr-4'>
        
        <button className='text-sm bg-purple-700 text-white p-2 m-2 rounded-lg' 
        onClick={handleGPTSearchClick}>
          {showgptPage ? "Movies" : "GPT Search"}</button>

        {showgptPage && (
        <select className='p-2 m-2 rounded-lg text-white bg-slate-700'
        onChange={handlelanguageChange}>
          {SUPPORTED_LANGUAGES.map(language => <option key ={language.identifier} value={language.identifier}>{language.name}</option>)} 
        </select>
        )}

        <img className='hidden md:block m-2'
        src={user?.photoURL}
        alt='user icon'/>
        
        <button className='text-white hover:text-green-700 text-sm font-semibold m-2'
      onClick={handleSignOut}
      >Sign Out</button>
    </div>
  )}
  </div>
);
  
}

export default Header;
