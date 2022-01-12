import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

import {IconeBookmark} from '../IconeBookmark/IconeBookmark'

import iconeBookmarkBranco from '../../img/bookmark-branco.svg'
import iconeBookmarkPreto from '../../img/bookmark-preto.svg'

import {IconeCompartilhar} from '../SecaoCompartilhar/IconeCompartilhar'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

import iconeAviao from '../../img/aviao.svg'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    marcado: false,
    postando: false,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    const valorIconeAtual = this.state.curtido
    const valorClicado = !valorIconeAtual

    this.setState({curtido: valorClicado})

    const valorContadorAtual = this.state.numeroCurtidas
    const valorContadorClicado = valorContadorAtual + 1
    let valorContadorMostrado

    if (valorContadorClicado % 2 === 0) {
      valorContadorMostrado = 0
    } else {
      valorContadorMostrado = 1
    }

    this.setState({numeroCurtidas: valorContadorMostrado})
  }

  onClickBookmark = () => {
    const bookmarkAtual = this.state.marcado
    const bookmarkClicado = !bookmarkAtual

    this.setState({marcado: bookmarkClicado})
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      postando: !this.state.postando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  escolheuRedeSocial = (redeSocial) => {
    console.log(`Post compartilhado no ${redeSocial}`)

    this.setState({
      postando: false,
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcado

    if(this.state.marcado) {
      iconeMarcado = iconeBookmarkPreto
    } else {
      iconeMarcado = iconeBookmarkBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.postando) {
      componenteCompartilhar = <SecaoCompartilhar escolher={this.escolheuRedeSocial}/>
    }


    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida} //valor se o icone foi clicado (true ou false)
          onClickIcone={this.onClickCurtida} //a mudança que ocorre quando clicado
          valorContador={this.state.numeroCurtidas} //a mudança que ocorre no contador (adicionar 1 e voltar para 0)
        />

        <IconeBookmark
          icone={iconeMarcado}
          onClickIcone={this.onClickBookmark}
        />

        <IconeCompartilhar
          icone={iconeAviao}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post