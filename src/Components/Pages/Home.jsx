import React from 'react'
import HomeHero from '../PageComponents/HomeHero'
import HomeMovieList from '../PageComponents/HomeMovieList'
import HomeTvList from '../PageComponents/HomeTvList'
const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeMovieList />
      <HomeTvList />
    </div>
  )
}

export default Home