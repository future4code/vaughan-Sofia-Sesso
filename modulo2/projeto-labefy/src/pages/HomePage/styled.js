import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

    h1 {
        text-align: center;
        font-size: 7em;
        color: rgb(28,185,83);
        margin: 0;
        padding-top: 10%;
        padding-bottom: 5%;
    }

    img {
        display: none;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 3em;
            padding: 20% 0;
        }

        img {
            display: inline;
            width: 40%;
            height: 40%;
            margin-bottom: 20%;
            filter: invert(63%) sepia(27%) saturate(1262%) hue-rotate(89deg) brightness(100%) contrast(92%);
        }
    }
`

export const Button = styled.button`
    width: 100px;
        justify-self: center;
        text-align: center;
        height: 65px;
        width: 150px;
        background-color: rgb(28,185,83);
        color: black;
        border: rgb(28,185,83) solid 1px;
        border-radius: 1em;
        cursor: pointer;
    

        &:hover{
            border: #169442 solid 1px;
            width: 155px;
            height: 70px;
        }
        &:active{
            background-color: transparent;
            color: rgb(28,185,83);
        }
`