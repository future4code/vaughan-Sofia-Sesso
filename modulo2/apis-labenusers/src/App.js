import axios from "axios"
import React from "react"

class App extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
    listaDeUsuarios: [],
    telaHome: true
  }

  componentDidMount() {
    this.getAllUsers()
  }

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }

  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    const axiosConfig = { headers: { Authorization: "sofia-sesso-vaughan" } }

    axios.post(url, body, axiosConfig)
      .then((response) => {
        alert("Usuário cadastrado!")
        this.setState({ inputNome: "", inputEmail: "" })
        this.getAllUsers()
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
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

  deleteUser = (idDoUsuarioClicado) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idDoUsuarioClicado}`
    const axiosConfig = { headers: { Authorization: "sofia-sesso-vaughan" } }

    axios.delete(url, axiosConfig)
      .then((response) => {
        alert("Usuário deletado!")
        this.getAllUsers()
      })
      .catch((error) => {
        console.log(error.response.data)
        alert(error.response.data)
      })
  }

  irParaTelaLista = () => {
    this.setState({ telaHome: false })
  }

  voltarParatelaHome = () => {
    this.setState({ telaHome: true })
  }

  render() {
    const listaDeNomes = this.state.listaDeUsuarios.map((usuario) => {
      return (
        <ul>
          <li>{usuario.name} <button onClick={() => this.deleteUser(usuario.id)}>Deletar Usuário</button></li>
        </ul>)
    })

    const renderizaTela = () => {
      if (this.state.telaHome === true) {
        return <div>
          <button onClick={this.irParaTelaLista}>Ver Lista de Nomes</button>
          <input value={this.state.inputNome} onChange={this.onChangeNome} placeholder="Nome" />
          <input value={this.state.inputEmail} onChange={this.onChangeEmail} placeholder="E-mail" />
          <button onClick={this.createUser}>Criar Usuário</button>
        </div>
      } else {
        return <div>
          <button onClick={this.voltarParatelaHome}>Voltar</button>
          {listaDeNomes}
        </div>
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
