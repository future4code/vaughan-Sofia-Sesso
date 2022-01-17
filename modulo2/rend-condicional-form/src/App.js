import React from 'react'
import Etapa1 from './pages/Etapa1'
import Etapa2 from './pages/Etapa2'
import Etapa3 from './pages/Etapa3'
import Fim from './pages/Fim'

class App extends React.Component {
  state = {
    tela: "Etapa 1"
  }

  passarParaEtapa2 = () => {
    this.setState({tela: "Etapa 2"})
  }

  passarParaEtapa3 = () => {
    this.setState({tela: "Etapa 3"})
  }

  terminarFormulario = () => {
    this.setState({tela: "Fim"})
  }

  render () {
    const renderizaTela = () => {
      switch (this.state.tela) {
        case "Etapa 1":
          return <Etapa1 passarEtapa2={this.passarParaEtapa2}/>
        case "Etapa 2":
          return <Etapa2 passarEtapa3={this.passarParaEtapa3}/>
        case "Etapa 3":
          return <Etapa3 terminar={this.terminarFormulario}/>
        case "Fim":
          return <Fim/>
      }
    }

    return (
      <>
        {renderizaTela()}
      </>
    )
  }
}

export default App;
