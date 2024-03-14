import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Program from './Component/Program/Program'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testonimals from './Component/Testonimals/Testonimals'
import Contact from './Component/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title/>
      <div className='container'>
      <Title title='ourprogram' subtitle='what we offer'/>
      <Program/>
      <About/>
      <Title title='Gallery' subtitle='Campus Photos'/>
      <Campus/>
      <Title title='Campus Photos' subtitle='what students say'/>
      <Testonimals/>
      <Title title='Contact' subtitle='Get In touch'/>
      
      
      
      </div>
      
      
    </div>
  )
}

export default App