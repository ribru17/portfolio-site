import React, { useState, useEffect, useRef } from 'react'
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
import Menu from './Components/SVGs/Menu/Menu'
import DropDown from './Components/DropDown/DropDown'

function App() {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const dropDownRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const openDropDown = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    /**
    * Alert if clicked on outside of element
    */
    function handleClickOutside(e: MouseEvent) {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node) && svgRef.current && !svgRef.current.contains(e.target as Node)) {
        if (isOpen) {
          setIsOpen(false)
        }
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
    // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dropDownRef, svgRef, isOpen])

  return (
    <BrowserRouter>
      <div>
        <div id='navBar'>
          <Link id="nameLink" to="/portfolio-site">Riley Bruins<img className='logo' src='/portfolio-site/logo192.png' alt='Logo'></img></Link>
          <div id="otherLinks">
            <Link to="/portfolio-site/experience">Experience</Link>
            <Link to="/portfolio-site/projects">Projects</Link>
            <Link to="/portfolio-site/contact">Contact</Link>
          </div>
          <Menu ref={svgRef} fill='white' open={isOpen} id="menuSvg" onClick={openDropDown}/>
        </div>
        <DropDown ref={dropDownRef} showing={isOpen} setShowing={setIsOpen} />
        <div id="mainBody">
          <Routes>
            <Route path="/portfolio-site/contact" element={<Contact standAlone={true} />}></Route>
            <Route path="/portfolio-site" element={<Home />}></Route>
            <Route path="/portfolio-site/projects" element={<Projects standAlone={true} />}></Route>
            <Route path="/portfolio-site/experience" element={<Experience standAlone={true} />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
