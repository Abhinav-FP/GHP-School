import React from 'react'
import Slider from './Slider'
import VisionMission from './VisionMission'
import Follow from './Follow'
import Layout from '@/layout/Layout'
import AdmissionForm from '../admissions/AdmissionForm'
import AdmissionLine from './AdmissionLine'

export default function MainPage() {
  return (
      <Layout>
      <Slider/>
      <VisionMission/>
      <Follow/>
      {/* Admission Open line */}
      <AdmissionLine/>
      </Layout>
  )
}
