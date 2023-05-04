import React from 'react'
import Navbar from '../components/Navbar'
import MainStory from '../components/MainStory'
import TrendingStories from '../components/TrendingStories'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <MainStory />
      <TrendingStories />
    </div>
  )
}

export default HomePage
