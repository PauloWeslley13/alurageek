import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { ThemeCustomization } from '../presenter/theme'
import { store } from './store'
import { App } from '.'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeCustomization>
          <Router basename="/">
            <App />
          </Router>
        </ThemeCustomization>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
