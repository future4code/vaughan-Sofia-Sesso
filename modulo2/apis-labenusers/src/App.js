import React from "react"
import axios from "axios"
import Cadastro from "./telas/Cadastro"
import ListaDeUsuarios from "./telas/ListaDeUsuarios"
import DetalhesDoUsuario from "./telas/DetalhesDoUsuario"

class App extends React.Component {
  state = {
    tela: "cadastro",
    usuario: {},
    listaDeUsuarios: [],
  }

  irParaTelaCadastro = () => {
    this.setState({ tela: "cadastro" })
  }

  irParaTelaLista = () => {
    this.setState({ tela: "lista" })
  }

  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const axiosConfig = { headers: { Authorization: "sofia-sesso-vaughan" } }

    axios.get(url, axiosConfig)
      .then((response) => {
        this.setState({ listaDeUsuarios: response.data })
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }

  getUserById = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    const axiosConfig = { headers: { Authorization: "sofia-sesso-vaughan" } }

    axios.get(url, axiosConfig)
      .then((response) => {
        this.setState({ usuario: response.data, tela: "detalhes" })
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    const axiosConfig = { headers: { Authorization: "sofia-sesso-vaughan" } }

    if (window.confirm("Tem certeza de que deseja deletar?")) {
      axios.delete(url, axiosConfig)
        .then(() => {
          alert("Usuário deletado!")
          this.getAllUsers()
          this.setState({tela: "lista"})
        })
        .catch((error) => {
          alert(error.response.data)
        })
    }
  }

  render() {

    const renderizaTela = () => {
      switch (this.state.tela) {
        case "cadastro":
          return <Cadastro
            irParaTelaLista={this.irParaTelaLista}
          />
        case "lista":
          return <ListaDeUsuarios
            getUserById={this.getUserById}
            irParaTelaCadastro={this.irParaTelaCadastro}
            deleteUser={this.deleteUser}
            getAllUsers={this.getAllUsers}
            listaDeUsuarios={this.state.listaDeUsuarios}
          />
        case "detalhes":
          return <DetalhesDoUsuario
            usuario={this.state.usuario}
            irParaTelaCadastro={this.irParaTelaCadastro}
            irParaTelaLista={this.irParaTelaLista}
            deleteUser={this.deleteUser}
            getAllUsers={this.getAllUsers}
            getUserById={this.getUserById}
          />
      }
    }

    return (
      <>
        {renderizaTela()}
      </>
    )
  }
}

export default App
