import React from 'react'
import './global-mobile.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="portfolio">
        <Projects />
      </div>
      <div id="contact">
        <Contacts />
      </div>
       <Footer />
    </div>
  )
}

export default App
