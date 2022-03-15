import React, { useState } from 'react'
import Router from './routes/Router'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'


function App() {
  const token = localStorage.getItem('token')
  const [buttonText, setButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          buttonText={buttonText}
          setButtonText={setButtonText}
        />
        <Router
          setButtonText={setButtonText}
        />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
