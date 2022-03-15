import styled from 'styled-components'

export const ShareContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
        padding-top: 7px;
        margin-right: 10px;

        &:active {
            filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(8%) contrast(70%);
        }
    }
`