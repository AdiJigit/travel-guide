import React from 'react'
import Pictures from './components/Pictures'
import Resorts from './components/Resorts'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Travel from './components/Travel'
import View from './components/View'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Resorts />
      <Travel />
      <View />
      <Pictures />
      <Footer />
    </div>
  )
}

export default App