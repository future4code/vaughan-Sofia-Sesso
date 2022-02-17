import styled from 'styled-components'

export const ContainerListTripPage = styled.div`
    color: #FFF68E;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(https://cdn-icons.flaticon.com/png/512/1146/premium/1146300.png?token=exp=1645136702~hmac=3565be0c58a6c239408d138aaa98c325);

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