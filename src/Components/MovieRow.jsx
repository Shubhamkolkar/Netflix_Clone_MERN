import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const MovieRow = ({ title, url }) => {
  const rowId=Math.floor(Math.random()*1000)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(url)
      .then((res) => setMovies(res.data.results))
      .catch(err => console.log(err))
  }, [url])

  const slide = (offset) => {
    const slider = document.getElementById(`slider`+rowId)
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + offset
    }
  }

  return (
    <>
      <h2 className='font-NetSan-bold md:text-xl p-4 capitalize'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          className='bg-white rounded-full absolute left-2 opacity-80 text-gray-800 hidden group-hover:block cursor-pointer'
          size={40}
          onClick={() => slide(-100)}
        />
        <div id={`slider`+rowId} className="h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies.map((movie, key) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          className='bg-white rounded-full absolute right-2 opacity-80 text-gray-800 hidden group-hover:block cursor-pointer'
          size={40}
          onClick={() => slide(100)}
        />
      </div>
    </>
  )
}

export default MovieRow
