import axios from 'axios';
import React, { useEffect, useState } from 'react'
import endpoints, { createImageUrl } from '../Services/movieServices';

export const Hero = () => {
  const [movie,setMovie] = useState({});

  useEffect(()=>{
    axios.get(endpoints.popular).then((response) => {
      // console.log(response.data)
      const movies = response.data.results;
      // console.log(movies)
      const randomMovie = movies[Math.floor(Math.random()*movies.length)]
      // console.log(randomMovie)

      setMovie(randomMovie)
    }).catch(err => console.log(err))
  },[])

const truncate = (str, length)=>{
if (!str) return ""
return str. length > length ? str.slice(0,length) +"..." :  str;
}
  if(!movie){
    return <p>Fetching Movies...</p>
  }

  const { title, backdrop_path, release_date, overview} = movie;

// console.log(title)

  return (

<div className='w-full h-[550px] lg:h-[850px] relative overflow-hidden'>
  <div className='w-full h-full relative'>
    <div className="absolute w-full h-full lg:h-[850px] bg-gradient-to-r from-black to-transparent z-10" />
    <img className="w-full h-full object-cover object-top z-0" src={createImageUrl(backdrop_path,"original")} alt={title} />
    <div className='absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8 z-20'>
      <h1 className='text-3xl md:text-6xl font-NetSan-mid'>{title}</h1>
      <div className='mt-8 mb-4 '>
        <button className='capitalize border text-black bg-gray-300 py-2 px-5 ml-4 '>Play</button>
        <button className='capitalize border border-gray-300 py-2 px-5 ml-4 '>Watch later</button>
      </div>
      <p className='text-gray-400 text-sm'>
        {release_date}
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncate(overview, 160)}</p>
      </p>
    </div>
  </div>
</div>




  // <div className='w-full h-[550px] lg:h-[850px]'>
  //               <div className='w-full h-full'>
  //                 <div className="absolute w-full h-[850px] lg:h-[650px] bg-gradient-to-r from-black"/>
  //                   <img className="w-full h-full object-cover object-top" src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} />
  //                   <div className='absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8'>
  //                     <h1 className='text-3xl md:text-6xl font-NetSan-mid'>{title}</h1>
  //                     <div className='mt-8 mb-4 '>
  //                       <button className='capitalize border text-black bg-gray-300 py-2 px-5 ml-4 '>Play</button>
  //                       <button className='capitalize border border-gray-300 py-2 px-5 ml-4 '>watch later</button>
  //                     </div>
  //                     <p className='text-gray-400 text-sm'>{release_date}
  //                       <p>{truncate(overview,160)}</p>
  //                     </p>
  //                   </div>
  //               </div>
  // </div>
  )
  
  
}
