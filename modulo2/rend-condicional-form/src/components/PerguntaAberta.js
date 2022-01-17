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

const Input = styled.input`
    margin-bottom: 15px;
`

const PerguntaAberta = (props) => {
    return <Container>
        <TituloLabel>{props.pergunta}</TituloLabel>
        <Input type="text"/>
    </Container>
}

export default PerguntaAberta