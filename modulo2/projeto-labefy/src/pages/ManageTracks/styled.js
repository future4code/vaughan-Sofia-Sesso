import styled from "styled-components"

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 50px;
    width: calc(100vw - 40px);
    padding: 10px;

    h2 {
        justify-self: center;
        margin: 0;
        margin-left: 50px;
    }

    button {
        width: 50px;
        margin-right: 40px;
    }
`

export const SearchContainer = styled.div`
    display: flex;
    padding: 20px;
`

export const Url = styled.input`
    width: 500px;
`

export const TrackContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    padding: 10px;
    border-bottom: dashed black 1px;
    
    p {
        margin: 0;
    }

    iframe {
        height: 5em;
        width: 5em;
        border: none;
    }

    button {
        height: 2em;
        background-color: white;
        border: none;
    }
`