import styled from "styled-components"

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    color: white;

    h2 {
        margin-top: 30px;
    }
`

export const FormContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 40%;

    input {
        height: calc(3em - 10px);
        padding: 5px;
        margin: 5px;
        width: 350px;
        background-color: transparent;
        border: none;
        border-bottom: rgb(28,185,83) solid 2px;
        color: white;

        &:focus{
            outline: none;
        }
    }

    button {
        width: 100px;
        height: 3em;
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
    }
`

export const DescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 50px repeat(2, 1fr);
    align-items: center;
    width: 520px;

    #hash {
        grid-area: 1/1/2/2;
        text-align: center;
    }

    #title {
        grid-area: 1/2/2/3;
    }
`

export const PlaylistContainer = styled.div`
    display: grid;
    grid-template-columns: 50px repeat(2, 1fr);
    justify-content: space-between;
    align-items: center;
    width: 520px;
    padding: 10px 0;
    border-top: solid rgb(28,185,83) 1px;

    &:hover{
        opacity: 0.7
    }

    p {
        text-align: center;
    }
    
    #playlistName {
        text-align: left;

        &:hover{
            color: rgb(28,185,83);
        }
        &:active{
            color: #169442;
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
`