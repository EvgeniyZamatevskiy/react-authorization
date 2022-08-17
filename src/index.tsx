import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { HashRouter } from 'react-router-dom'
import { Global } from 'styles'
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <HashRouter>
    <Global />
    <App />
  </HashRouter>
)

reportWebVitals()
