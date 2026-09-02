import React from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import LastPage from './LastPage'
import ScrollVideoPage from './ScrollVideoPage'
import MusicPlayer from '../components/MusicPlayer'

const Home = () => {
  return (
    <>
    <MusicPlayer />
    <FirstPage/>
    <SecondPage/>
    <ThirdPage/>
    <ScrollVideoPage/>
    <LastPage/>
    </>
  )
}

export default Home