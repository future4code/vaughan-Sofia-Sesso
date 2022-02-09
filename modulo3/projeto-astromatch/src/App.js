import React, { useState } from 'react'
import InicialPage from './pages/InicialPage/InicialPage'
import MatchPage from './pages/MatchPage/MatchPage'
import ResetMatches from './components/ResetMatches'
import { DisplayContainer, AppContainer, HeaderContainer } from './styles'
import matches from './images/matches.png'
import swipes from './images/swipes.png'

function App() {

  const [page, setPage] = useState("inicial")

  const switchToInicial = () => {
    setPage("inicial")
  }

  const switchToMatch = () => {
    setPage("match")
  }

  const switchPage = () => {
    switch (page) {
      case "inicial":
        return <InicialPage />
      case "match":
        return <MatchPage />
      default:
        return <InicialPage />
    }
  }

  return (
    <DisplayContainer>
      <AppContainer>
        <HeaderContainer>
          <button onClick={switchToInicial}><img src={swipes} alt='Icone Swipes' /></button>
          <span><h3>Astro</h3><h3 id='yellow-text'>Match</h3></span>
          <button onClick={switchToMatch}><img src={matches} alt='Icone Matches' /></button>
        </HeaderContainer>
        {switchPage()}
      </AppContainer>
      <ResetMatches />
    </DisplayContainer>
  )
}

export default App