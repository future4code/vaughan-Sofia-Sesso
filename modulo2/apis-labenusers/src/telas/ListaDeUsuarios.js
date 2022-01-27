import axios from "axios"
import React from "react"

class ListaDeUsuarios extends React.Component {
    state = {
        inputBusca: "",
        resultadoDaBusca: []
    }

    componentDidMount() {
        this.props.getAllUsers()
    }

    onChangeBusca = (event) => {
        this.setState({ inputBusca: event.target.value })
    }

    searchUsers = (busca) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${busca}&email=`
        const axiosConfig = { headers: { Authorization: "sofia-sesso-vaughan" } }

        axios.get(url, axiosConfig)
            .then((response) => {
                this.setState({ inputBusca: "" })
                this.setState({ resultadoDaBusca: response.data[0].name })
                console.log(this.state.resultadoDaBusca)
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    render() {
        // Não consegui renderizar a pessoa que é devolvida no output do searchUsers, então deixei apenas a função escrita com
        // um console.log para ver o que é recebido dessa função.

        const listaDeNomes = this.props.listaDeUsuarios.map((usuario) => {
            return (
                <ul key={usuario.id}>
                    <li onClick={() => this.props.getUserById(usuario.id)} >{usuario.name}</li>
                    <button onClick={() => this.props.deleteUser(usuario.id)}>Deletar Usuário</button>
                </ul>)
        })

        return <div>
            <button onClick={this.props.irParaTelaCadastro}>Voltar</button>
            <input value={this.state.inputBusca} onChange={this.onChangeBusca}></input>
            <button onClick={() => this.searchUsers(this.state.inputBusca)}>Buscar</button>
            {listaDeNomes}
        </div>
    }
}

export default ListaDeUsuarios