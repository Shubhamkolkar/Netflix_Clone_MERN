import React from 'react'
import { Hero } from '../Components/Hero'
import MovieRow from '../Components/MovieRow'
import endpoints from '../Services/movieServices'

const Home = () => {
  // console.log(endpoints.trending +" " + "Trending Movies")
  return (
  <>
  <Hero/>
  <MovieRow title={'upcoming'} url={endpoints.upcoming}/>
  <MovieRow title={'airing today'} url={endpoints.airingToday} />
  <MovieRow title={'top rated'} url={endpoints.topRated}/>
  <MovieRow title={'now playing'} url={endpoints.nowPlaying}/>
  <MovieRow title={'popular'} url={endpoints.popular}/>
  </>
  )
}

export default Home