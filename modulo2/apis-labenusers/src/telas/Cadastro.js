import axios from "axios"
import React from "react"

class Cadastro extends React.Component {
    state = {
        inputNome: "",
        inputEmail: ""
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
            .then(() => {
                alert("Usuário cadastrado!")
                this.setState({ inputNome: "", inputEmail: "" })
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    render() {
        return <div>
            <button onClick={this.props.irParaTelaLista}>Ver Lista de Nomes</button>
            <input value={this.state.inputNome} onChange={this.onChangeNome} placeholder="Nome" />
            <input value={this.state.inputEmail} onChange={this.onChangeEmail} placeholder="E-mail" />
            <button onClick={this.createUser}>Criar Usuário</button>
        </div>
    }
}

export default Cadastro