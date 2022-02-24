import styled from "styled-components"

export const FeedPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 450px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #FFC2F6;

    #info-container {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
    }

    img {
        height: 20px;
        filter: invert(84%) sepia(13%) saturate(1067%) hue-rotate(278deg) brightness(99%) contrast(104%);
    }
`

export const CreatePostContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    max-width: 450px;
    margin-top: 20px;

    input {
        background-color: #282928;
        color: #FFC2F6;
        border: 1px solid #FFC2F6;
        width: 100%;
        padding: 11px;
        margin-bottom: 10px;

        &:focus {
            outline: none;
        }
    }

    textarea {
        background-color: #282928;
        color: #FFC2F6;
        border: 1px solid #FFC2F6;
        width: 100%;
        height: 100px;
        padding: 11px;
        font-family: 'Roboto', sans-serif;

        &:focus {
            outline: none;
        }
    }

    button {
        background-color: #282928;
        color: #FFC2F6;
        cursor: pointer;
        border: 1px solid #FFC2F6;
        padding: 7px;
        margin-top: 10px;

        &:hover {
            background-color: #5e5e5e;
        }

        &:active {
            background-color: #FFC2F6;
            color: #282928;
        }
    }
`

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    max-width: 472px;
    margin-top: 20px;
    margin-bottom: 10px;
    background-color: #282928;
    border: 1px solid #FFC2F6;

input {
        background-color: #282928;
        border: none;
        color: #FFC2F6;
        width: 100%;
        padding: 11px;

        &:focus {
            outline: none;
        }
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
        padding-top: 3px;

        &:active {
            filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(70%) contrast(70%);
        }
    }

    img {
        filter: invert(84%) sepia(13%) saturate(1067%) hue-rotate(278deg) brightness(99%) contrast(104%);
    }
`