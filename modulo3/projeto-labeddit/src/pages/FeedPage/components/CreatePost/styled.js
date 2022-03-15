import styled from 'styled-components'

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