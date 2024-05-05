import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleHomebtn = ()=>{
    navigate("/login");
  }
  return (
    <div>
        <div className=' w-full absolute text-red-600 font-extrabold text-4xl font-serif p-5 bg-gradient-to-b from-black z-10 flex justify-between'>
        <h1 className='p-4'>STREAMIFY</h1> 
      </div>
      <div className='absolute '>
        <img 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='logo'>
        </img>
        </div>
        <div className='z-10 absolute my-52 right-0 left-0 text-center '>
        <h1 className='p-2 text-5xl text-white font-bold'>Unlimited movies, TV shows and more</h1>
        <h3 className='p-2 text-2xl text-white font-semibold'>Watch Anytime . Anywhere joyfully.</h3>
        <button className=' p-4 text-white text-xl font-semibold bg-red-700 absolute rounded-lg' onClick={handleHomebtn}>Get Started ➡️</button>
      </div>
    </div>
  );
}

export default Home;
