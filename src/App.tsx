// import { useState } from 'react'
import './App.css'
import EducationalExperience from './components/EducationalExperience'
import PersonalInfoForm from './components/PersonalInfo'
import PracticalExperience from './components/PracticalExperience'

function App() {

  return (
    <>
      <div><PersonalInfoForm /></div>
      <div><EducationalExperience /></div>
      <div><PracticalExperience /></div>
    </>
  )
}

export default App
