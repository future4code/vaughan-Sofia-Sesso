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

class Etapa1 extends React.Component {
    render () {
        return (
            <ContainerFormulario>
                <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>

                <PerguntaAberta pergunta={"1. Qual o seu nome?"}/>
                <PerguntaAberta pergunta={"2. Qual sua idade?"}/>
                <PerguntaAberta pergunta={"3. Qual seu email?"}/>

                <PerguntaFechada
                    pergunta={"4. Qual o grau de escolaridade"}
                    opcoes={[
                        "Ensino Médio Incompleto",
                        "Ensino Médio Completo",
                        "Ensino Superior Incompleto",
                        "Ensino Superior Completo"
                    ]}
                />

                <button onClick={this.props.passarEtapa2}>Próxima etapa</button>
            </ContainerFormulario>
        )
    }
}

export default Etapa1