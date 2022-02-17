import styled from 'styled-components'

export const BodyContainer = styled.div`
    background-color: #8795DE;
    min-height: 100vh;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF68E;
    color: #232E7A;
    padding: 10px;

    div {
        display: flex;
        align-items: center;
    }

    img {
        width: 50px;
        height: 50px;
        margin-right: 15px;
    }

    #tag-line {
        width: 100%;
        justify-content: center;
    }

    @media (max-width: 376px) {
       flex-direction: column;

       div{
           width: initial;
       }

       #tag-line {
           display: none;
       }
    }
`