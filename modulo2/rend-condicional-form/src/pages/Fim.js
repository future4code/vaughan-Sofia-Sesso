import React from "react"
import styled from "styled-components"

const Titulo = styled.h1`
    font-size: larger;
    padding-top: 10px;
`
const ContainerMensagem = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Fim extends React.Component {
    render () {
        return (
            <ContainerMensagem>
                <Titulo>O FORMULÁRIO ACABOU</Titulo>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
           </ContainerMensagem>
        )
    }
}

export default Fim