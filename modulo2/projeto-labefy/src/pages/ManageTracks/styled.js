import styled from "styled-components"

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    color: white;
`

export const TitleContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 100px;
    align-items: center;
    width: calc(100vw - 100px);
    padding: 30px 10px 10px 10px;

    h2 {
        justify-self: center;
        margin: 0;
        margin-left: 50px;
        color: white;
    }

    button {
        width: 100px;
        margin-right: 40px;
        height: 3em;
        background-color: rgb(28,185,83);
        color: black;
        border: rgb(28,185,83) solid 1px;
        border-radius: 1em;
        margin-left: 5px;
        cursor: pointer;

        &:hover{
            background-color: #169442;
            border: #169442 solid 1px;
        }
        &:active{
            background-color: transparent;
            color: rgb(28,185,83);
        }
    }

    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: 68px 5fr 1fr;
        width: 93vw;

        h2 {
            grid-area: 1/2/2/3;
            margin: 0;
            justify-self: center;
        }

        button {
            grid-area: 1/3/2/4;
            width: 60px;
            margin: 0;
            margin-left: 10px;
        }
    }
`

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 20px 40px 20px;

    #url {
        width: 500px;
    }

    input {
        height: calc(3em - 10px);
        padding: 5px;
        margin: 5px;
        background-color: transparent;
        border: none;
        border-bottom: rgb(28,185,83) solid 2px;
        color: white;

        &:focus{
            outline: none;
        }
    }

    button {
        height: 3em;
        background-color: rgb(28,185,83);
        color: black;
        border: rgb(28,185,83) solid 1px;
        border-radius: 1em;
        width: 150px;
        margin-left: 5px;
        cursor: pointer;

        &:hover{
            background-color: #169442;
            border: #169442 solid 1px;
        }
        &:active{
            background-color: transparent;
            color: rgb(28,185,83);
        }
    }

    @media (max-width: 600px) {
        width: 98vw;
        flex-direction: column;
        padding: 20px 0 40px 0;

        #url {
        width: 80vw;
        }

        button {
        margin-top: 20px;
        margin-bottom: 10px;
        }
    }

    
`

export const DescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 70px repeat(4, 1fr);
    align-items: center;
    width: 1050.6px;
    padding-bottom: 10px;

    #hash {
        grid-area: 1/1/2/2;
        text-align: center;
    }

    #title {
        grid-area: 1/3/2/4;
        text-align: center;
    }

    #artist {
        grid-area: 1/4/2/5;
        text-align: center;
    }

    @media (max-width: 600px) {
        display: none;
    }
`

export const TrackContainer = styled.div`
    display: grid;
    grid-template-columns: 70px repeat(4, 1fr);
    align-items: center;
    width: 1050.6px;
    padding: 10px 0;
    border-top: solid rgb(28,185,83) 1px;

    &:hover{
        opacity: 0.7
    }
    
    p {
        margin: 0;
        text-align: center;
    }

    iframe {
        height: 5em;
        width: 5em;
        border: none;

        &:hover{
            border: rgb(28,185,83) solid 1px;
        }
    }

    button {
        justify-self: flex-end;
        height: 2.2em;
        width: 2em;
        background-color: transparent;
        border: none;
        border-radius: 0.5em;
        margin-right: 10px;
        cursor: pointer;    
    }

    #deleteButton {
      filter: invert(100%) sepia(0%) saturate(6234%) hue-rotate(246deg) brightness(87%) contrast(156%);

      &:hover{
        filter: invert(63%) sepia(27%) saturate(1262%) hue-rotate(89deg) brightness(100%) contrast(92%);
      }
      &:active{
        filter: invert(18%) sepia(35%) saturate(990%) hue-rotate(89deg) brightness(97%) contrast(89%);
      }
    }

    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: 50px 100px 1fr 50px;
        grid-template-rows: 1fr 1fr;
        width: 98vw;

        iframe {
            grid-area: 1/2/3/3;
        }

        #number {
            grid-area: 1/1/3/2;
        }

        #nome {
            grid-area: 1/3/2/4;
            align-self: flex-end;
            border-bottom: white solid 0.3px;
            padding-bottom: 12.5px;
        }

        #artista {
            grid-area: 2/3/3/4;
        }

        button {
            grid-area: 1/-2/3/-1;
            justify-self: center;
        }
    }
`