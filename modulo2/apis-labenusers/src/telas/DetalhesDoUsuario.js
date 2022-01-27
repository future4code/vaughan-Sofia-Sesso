import React from "react"
import axios from "axios"

class DetalhesDoUsuario extends React.Component {
    state = {
        novoInputNome: this.props.usuario.name,
        novoInputEmail: this.props.usuario.email,
        containerHidden: true
    }

    onChangeNome = (event) => {
        this.setState({ novoInputNome: event.target.value })
    }

    onChangeEmail = (event) => {
        this.setState({ novoInputEmail: event.target.value })
    }

    editUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const axiosConfig = { headers: { Authorization: "sofia-sesso-vaughan" } }
        const body = {
            name: this.state.novoInputNome,
            email: this.state.novoInputEmail
        }

        axios.put(url, body, axiosConfig)
            .then(() => {
                alert(`Usuário atualizado!\nNovo nome: ${this.state.novoInputNome}\nNovo e-mail: ${this.state.novoInputEmail}`)
                this.props.getUserById(id)
                this.setState({containerHidden: true})
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }

    mostrarContainerEditar = () => {
        this.setState({containerHidden: false})
    }

    render() {     
        return <div>
            <button onClick={this.props.irParaTelaLista}>Voltar</button>
            <button onClick={this.props.irParaTelaCadastro}>Voltar para Página de Cadastro</button>
            <div>
                <p>Nome: {this.props.usuario.name}</p>
                <p>E-mail: {this.props.usuario.email}</p>
                <button onClick={() => this.props.deleteUser(this.props.usuario.id)}>Deletar Usuário</button>
                <button 
                    style={ this.state.containerHidden ? { display:'inline'} : {display : 'none'}} 
                    onClick={this.mostrarContainerEditar}>Editar Informações
                </button>
                <div style={ this.state.containerHidden ? { display:'none'} : {display : 'inline'}}>
                    <input value={this.state.novoInputNome} onChange={this.onChangeNome} placeholder="Nome"></input>
                    <input value={this.state.novoInputEmail} onChange={this.onChangeEmail} placeholder="E-mail"></input>
                    <button onClick={() => this.editUser(this.props.usuario.id)}>Salvar</button>
                </div>
            </div>
        </div>
    }
}

export default DetalhesDoUsuario