import React from 'react'
import styled from 'styled-components'

const IconeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 15px;
    background-color: lightblue;
    padding: 5px;
    border: 1px black solid;
`

function IconeHeader(props) {
    return (
        <IconeContainer>
            <img src={props.imagem}/>
            <p>{props.texto}</p>
        </IconeContainer>
    )
}

export default IconeHeader