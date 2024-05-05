import React from 'react';

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-slate-700'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='w-1/3 py-6 text-lg'>{overview}</p>
      <div className="">
        <button className='bg-white text-black p-2 text-xl px-8 rounded-sm font-bold hover:bg-opacity-75'>▶ Play</button>
        <button className='bg-black text-white  m-2 p-2 text-xl px-8 rounded-sm bg-opacity-70'>More Info.</button>
      </div>

    </div>
  );
}

export default VideoTitle;
