import React from 'react'
import HeroSection from './components/hero'

import AboutSection from './about/page'
import SkillsSection from './skills/page'
import ProjectsSection from './project/page'
import ContactSection from './contact/page'

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] '>
    <div className="container mx-auto px-12 py-4  "> 
      
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
       </div>
    </main>
  )
}

export default Home
