import React from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch} from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';

const Header = () => {

  const dispatch = useDispatch();   
  const navigate = useNavigate();

  const user = useSelector(store =>store.user)

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
  return (
    <div className=' w-full absolute text-red-600 font-extrabold text-4xl font-serif p-5 bg-gradient-to-b from-black z-10 flex justify-between'>
      <h1 className='p-4'>STREAMIFY</h1> 
      {user &&(
      <div className='flex'>
        <img className='hidden md:block w-16 h-16 p-2'
        src={user?.photoURL}
        alt='user icon'/>
        <button className='text-white hover:text-green-700 text-sm text text-'
      onClick={handleSignOut}
      >Sign Out</button>
    </div>
  )}
  </div>
);
  
}

export default Header;
