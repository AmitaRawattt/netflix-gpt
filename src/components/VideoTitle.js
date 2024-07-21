import React from 'react'

const VideoTitle = ({title, overview}) => {
    
  return (
    <div className='w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <h2 className="py-6 text-lg w-1/2">{overview}</h2>
        <div className="flex align-center mt-3">
            <button className="bg-white flex px-5 py-1  text-black shadow-md rounded-sm "><span className='text-3xl self-center '>▸ </span><span className="font-bold self-center">Play</span></button>
            <button className=' px-5 py-1  bg-gray-700 opacity-60 ml-3  text-white rounded-sm flex '><span className='text-xl self-center'>ⓘ </span><span className="font-bold self-center">More Info</span></button>
        </div>
    </div>
  )
}

export default VideoTitle