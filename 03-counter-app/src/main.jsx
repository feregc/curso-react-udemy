import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstApp } from './FirstApp'
import './style.css'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp /> */}
    <CounterApp value= {0}/>
  </React.StrictMode>
)
