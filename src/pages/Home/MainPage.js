import React from 'react'
import Header from './Header'
import Slider from './Slider'
import VisionMission from './VisionMission'
import Follow from './Follow'
import Footer from './Footer'

export default function MainPage() {
  return (
    <div>
      <Header/>
      <Slider/>
      <VisionMission/>
      {/* <Follow/> */}
      <Footer/>
    </div>
  )
}
