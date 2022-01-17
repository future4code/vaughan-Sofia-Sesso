import React from "react"
import styled from "styled-components"
import PerguntaAberta from "../components/PerguntaAberta"

const Titulo = styled.h1`
    font-size: larger;
`

const ContainerFormulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Etapa2 extends React.Component {
    render () {
        return (
            <ContainerFormulario>
                <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>

                <PerguntaAberta pergunta={"1. Qual o curso?"}/>
                <PerguntaAberta pergunta={"2. Qual a unidade de ensino?"}/>

                <button onClick={this.props.passarEtapa3}>Próxima etapa</button>
           </ContainerFormulario>
        )
    }
}

export default Etapa2