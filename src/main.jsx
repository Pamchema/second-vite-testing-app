import React from 'react'
import ReactDOM from 'react-dom/client'
import  Search from './Search.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="App">
      <h1>React Search Engine</h1>
    </div>
    <Search />
  </React.StrictMode>
);
