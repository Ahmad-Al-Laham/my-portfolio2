import React from 'react'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import Navbar from './components/Navbar'
import LogoShowcase from './sections/LogoShowcase'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


const App = () => {
  return (
<>
<Navbar/>
<Hero/>
<Showcase/>
<LogoShowcase/>
<FeatureCards/>
<Experience/>
<TechStack/>
<Contact/>
<Footer/>
</>
  )
}

export default App
