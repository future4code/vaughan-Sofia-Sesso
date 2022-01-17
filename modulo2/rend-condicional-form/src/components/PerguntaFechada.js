import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TituloLabel = styled.label`
    margin-bottom: 15px;
`

const Select = styled.select`
    margin-bottom: 15px;
`

const PerguntaFechada = (props) => {
    const listaDeOpcoes = props.opcoes.map ((opcao) => {
        return <option>{opcao}</option>
    })

    return <Container>
        <TituloLabel>{props.pergunta}</TituloLabel>
                <Select>
                    {listaDeOpcoes}
                </Select>
    </Container>
}

export default PerguntaFechada