
import React from 'react'

import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Events from './components/Events/Events.jsx'
import News from './components/News/News.jsx'
import Members from './components/Members/Members.jsx'
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
  <Router>
   
  <Routes>
  <Route path='/' element={ <Home /> }  />
  <Route path='/about' element={<About/>}/>
  <Route path='/Members'  element={<Members />}/>
  <Route path='/events' element={ <Events/> }/>
  <Route path='/news' element={ <News /> }/>
  <Route path='/events' element={ <Events/> }/>
  </Routes>
  </Router>
  )
}

export default App