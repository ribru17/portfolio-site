import React from 'react'
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

function App() {
  
  // const sendRequest = async () => {
  //   let rootUrl = process.env.NODE_ENV === 'production' ? 'https://rb-portfolio-site.herokuapp.com' : ''
  //   await fetch(`${rootUrl}/api/hello`, {
  //     method: 'POST'
  //   })
  // }

  return (
    <BrowserRouter>
      <div>
        <div className='navBar'>
          <Link id="nameLink" to="/">Riley Bruins</Link>
          <div id="otherLinks">
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
