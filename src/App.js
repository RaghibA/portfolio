import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './components/layout/nav/nav'
import About from './components/sections/about/about'
import Contact from './components/sections/contact/contact'
import Hero from './components/sections/hero/hero'
import Projects from './components/sections/projects/projects'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </Router>
  )
}

export default App