import React from 'react'
import Slider from './Slider'
import VisionMission from './VisionMission'
import Follow from './Follow'
import Layout from '@/layout/Layout'

export default function MainPage() {
  return (
      <Layout>
      <Slider/>
      <VisionMission/>
      <Follow/>
      {/* Admission Open line */}
      <div className='z-[1] relative px-6 overflow-hidden md:px-8 lg:px-10 py-5 bg-[#EE834E]'>
        <div className="marquee flex items-center  md:px-8 lg:px-10 text-white text-2xl lg:text-[32px] merriweather-font tracking-[-0.04em]">
          <span className='pr-4'>
            <svg className='inline' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0L17.7813 10.2187L28 14L17.7813 17.7813L14 28L10.2187 17.7813L0 14L10.2187 10.2187L14 0Z" fill="white" />
            </svg> Admissions open for Class 1st to Class 5th – Apply Now!
          </span>
          <span className='pr-4'>
            <svg className='inline' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0L17.7813 10.2187L28 14L17.7813 17.7813L14 28L10.2187 17.7813L0 14L10.2187 10.2187L14 0Z" fill="white" />
            </svg> Admissions open for Class 1st to Class 5th – Apply Now!
          </span>
        </div>
      </div>
      </Layout>
  )
}
