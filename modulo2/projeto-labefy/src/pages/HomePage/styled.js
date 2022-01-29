import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        font-size: 7em;
        color: rgb(28,185,83);
        margin: 0;
        padding: 10%;
    }
`

export const Button = styled.button`
    width: 100px;
        text-align: center;
        height: 5em;
        width: 150px;
        background-color: rgb(28,185,83);
        color: black;
        border: rgb(28,185,83) solid 1px;
        border-radius: 1em;
        cursor: pointer;
    

        &:hover{
            background-color: #169442;
            border: #169442 solid 1px;
        }
        &:active{
            background-color: transparent;
            color: rgb(28,185,83);
        }
`