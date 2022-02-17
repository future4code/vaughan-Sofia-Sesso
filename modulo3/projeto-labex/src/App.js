import React from 'react'
import Header from './components/Header'
import Router from './router/Router'
import { BodyContainer } from './styled'

function App() {
  return (
    <BodyContainer>
      <Header />
      <Router />
    </BodyContainer>
  )
}

export default App