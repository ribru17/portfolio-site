import React from 'react';
import './App.css';

function App() {
  
  const sendRequest = async () => {
    let rootUrl = process.env.NODE_ENV === 'production' ? 'https://rb-portfolio-site.herokuapp.com' : ''
    await fetch(`${rootUrl}/api/hello`, {
      method: 'POST'
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={sendRequest}>Send Request</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
