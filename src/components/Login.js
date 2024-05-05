import React, {useRef, useState} from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { addUser } from '../utils/userSlice';
import { BG_IMAGE, USER_AVATAR } from '../utils/constant';
import Home from './Home';

const Login = () => {

    const [isSignInForm, setisSignInForm] = useState(true); 
    const [ErrorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = ()=>{
      setisSignInForm(!isSignInForm);
  }
    const handlebackbtn =()=>{
      navigate("/");
    }

    const handlebuttonClick= ()=>{
      // validate the form data
      const msg = checkValidData( email.current.value , password.current.value);
      setErrorMessage(msg);

      if (msg) return;

      if(!isSignInForm){
        
        //Sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;

        updateProfile(user, {
          displayName: name.current.value, photoURL: USER_AVATAR,
        }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser(
            {uid: uid, email: email, displayName: displayName, photoURL: photoURL,}));
            
        })
        .catch((error) => {
          setErrorMessage(error.msg);
        });

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });

      }
      else{
         
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });

      }
    }
   
  return (
    <div>
        <Header/>
        <div className='absolute '>
        <img src={BG_IMAGE}
        alt='logo'>
        </img>
        </div>
        <form onSubmit={(e)=> e.preventDefault()}
        className='p-12 absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-70'>
            <h2 className='text-3xl p-2 '>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
              {!isSignInForm && (
                <input 
                ref={name}
                type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-600 rounded-lg'></input>
              )}
            <input 
            ref={email}
            type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-600 rounded-lg'></input>
            <input 
            ref={password}
            type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-600 rounded-lg'></input>
            <p className='p-2 text-red-500 font-semibold'>
              {ErrorMessage}
            </p>
            <button 
            className='p-2 my-6 bg-red-600 w-full rounded-lg' onClick={handlebuttonClick}>
              {isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p 
            className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? "New to Streamify ? SIGN UP now." : "Already a user ? Please SIGN IN."}
            </p>
            <button className= 'ml-28 rounded-sm p-1' onClick={handlebackbtn}> ⬅Back</button>
        </form>
    </div>
  );
}

export default Login;
