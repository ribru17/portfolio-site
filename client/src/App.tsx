import React, {useState} from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import Projects from './Components/Pages/Projects'
import Experience from './Components/Pages/Experience'
import Menu from './Components/SVGs/Menu'

function App() {

  const [isClicked, setIsClicked] = useState<boolean>(false)

  return (
    <BrowserRouter>
      <div>
        <div className='navBar'>
          <Link id="nameLink" to="/">Riley Bruins</Link>
          <div id="otherLinks">
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <Menu fill='white' id="menuSvg" onClick={() => {setIsClicked(!isClicked)}}/>
        </div>
        <div className="mainBod">
          <Routes>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
