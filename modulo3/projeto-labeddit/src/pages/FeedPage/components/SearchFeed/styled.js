import styled from 'styled-components'

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 470px;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-right: 0;
    background-color: #282928;
    border: 1px solid #FFC2F6;

input {
        background-color: #282928;
        border: none;
        color: #FFC2F6;
        width: 100%;
        padding: 11px;
        padding-right: 0;

        &:focus {
            outline: none;
        }
    }

    img {
        padding: 7px;
        filter: invert(84%) sepia(13%) saturate(1067%) hue-rotate(278deg) brightness(99%) contrast(104%);
    }
`