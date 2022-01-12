import React from 'react'
// import './CardPequeno.css'
import styled from 'styled-components'

const SmallCardContainer = styled.div`
    display: flex;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
`

const Titulo = styled.div`
    display: flex;
    margin-left: 10px;
`

const Info = styled.p`
    margin-left: 5px;
`

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <div>
                <img src={props.imagem}/>
            </div>
            <Titulo>
                <h4>{props.titulo}</h4>
                <Info>{props.informacao}</Info>
            </Titulo>
        </SmallCardContainer>
    )
}

export default CardPequeno