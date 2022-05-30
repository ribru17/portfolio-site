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
        <nav>
          <ul>
            <li>
              <Link to="/">Riley Bruins</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/contact" element={<Contact />}>
            
          </Route>
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
