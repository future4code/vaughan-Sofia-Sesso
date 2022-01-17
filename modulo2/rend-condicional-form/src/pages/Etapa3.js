import React from "react"
import styled from "styled-components"
import PerguntaAberta from "../components/PerguntaAberta"
import PerguntaFechada from "../components/PerguntaFechada"

const Titulo = styled.h1`
    font-size: larger;
`

const ContainerFormulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Etapa3 extends React.Component {
    render () {
        return (
            <ContainerFormulario>
                <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>

                <PerguntaAberta pergunta={"1. Por que você não terminou um curso de graduação?"}/>

                <PerguntaFechada
                    pergunta={"2. Você fez algum curso complementar?"}
                    opcoes={[
                        "Curso técnico",
                        "Cursos de inglês",
                        "Não fiz curso complementar"
                    ]}
                />

                <button onClick={this.props.terminar}>Próxima etapa</button>
            </ContainerFormulario>
        )
    }
}

export default Etapa3