import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import About from './components/About'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Certificates />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}