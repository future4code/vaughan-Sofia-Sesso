import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const ContainerPostar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  width: 250px;
  margin: 10px;
  padding: 25px;
`

const InputsContainerPost = styled.input`
  margin-bottom: 20px;
  padding: 5px;
`
const ButtonContainerPost = styled.button`
  width: 80px;
  padding: 5px 0;
`

const TituloContainerPost = styled.h4`
  margin-top: 0;
`


class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario: "joao",
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },

      {
        nomeUsuario: "amanda",
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      },
    ],

    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  postar = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novaArrayDePosts = [...this.state.posts, novoPost]

    this.setState({posts: novaArrayDePosts})
    this.setState({valorInputNome: "", valorInputFotoUsuario: "", valorInputFotoPost: ""})
  }

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }

  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return (<Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
    />)
           
    })

    return (
      <MainContainer>        
          {listaDePosts}
      
      <ContainerPostar>
        <TituloContainerPost>Crie seu post:</TituloContainerPost>
        <InputsContainerPost value={this.state.valorInputNome} onChange={this.onChangeInputNome} placeholder='Nome'/>
        <InputsContainerPost value={this.state.valorInputFotoUsuario} onChange={this.onChangeInputFotoUsuario} placeholder='Link da Foto do Usuário'/>
        <InputsContainerPost value={this.state.valorInputFotoPost} onChange={this.onChangeInputFotoPost} placeholder='Link da Foto do Post'/>
        <ButtonContainerPost onClick={this.postar}>Postar</ButtonContainerPost>
      </ContainerPostar>
      
      </MainContainer>
    );
  }
}

export default App;
