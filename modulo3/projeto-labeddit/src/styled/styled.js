import styled from "styled-components"

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
        padding-top: 5px;
        height: 24px;
        filter: invert(84%) sepia(13%) saturate(1067%) hue-rotate(278deg) brightness(99%) contrast(104%);
    }
`