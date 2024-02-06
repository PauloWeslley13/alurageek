import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Routes } from './routes/routes'
import { ThemeCustomization } from './theme'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeCustomization>
        <Router basename="/">
          <Routes />
        </Router>
      </ThemeCustomization>
    </Provider>
  </React.StrictMode>,
)
