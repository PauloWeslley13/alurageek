import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes/routes'
import { ThemeCustomization } from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeCustomization>
      <Router basename="/">
        <Routes />
      </Router>
    </ThemeCustomization>
  </React.StrictMode>,
)
