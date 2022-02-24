import styled from 'styled-components'

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    #arrow-up {
        transform: rotate(-90deg);
        margin-right: 5px;
    }

    #clicked-arrow-up {
        transform: rotate(-90deg);
        margin-right: 5px;
        filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(20%) contrast(70%);
    }

    #arrow-down {
        transform: rotate(90deg);
        margin-left: 5px;
    }

    #clicked-arrow-down {
        transform: rotate(90deg);
        margin-left: 5px;
        filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(8%) contrast(70%);
    }
`