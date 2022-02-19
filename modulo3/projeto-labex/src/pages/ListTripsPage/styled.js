import styled from 'styled-components'

export const ContainerListTripPage = styled.div`
    color: #FFF68E;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    div{
        margin-bottom: 20px;
    }
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    width: 100%;
    
    div {
        margin-bottom: 20px;
    }

    @media (max-width: 376px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`