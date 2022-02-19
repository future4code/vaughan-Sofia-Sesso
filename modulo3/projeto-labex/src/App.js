import React from 'react'
import Header from './components/Header'
import Router from './router/Router'
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./theme"
import { BodyContainer } from './styled'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BodyContainer>
        <Header />
        <Router />
      </BodyContainer>

    </ThemeProvider>
  )
}

export default App