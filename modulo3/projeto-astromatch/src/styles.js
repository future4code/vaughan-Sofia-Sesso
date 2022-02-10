import styled from "styled-components"

export const DisplayContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    width: 375px;
    border-radius: 15px;
    background-color: #3b022b;
    color: #EF3A47;
    font-family: 'Rubik', sans-serif;
`

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;

    h3 {
        margin: 0;
        display: inline;
        font-size: 25px;
    }

    button {
        border: none;
        cursor: pointer;
        background-color: transparent;
    }

    img {
        height: 40px;
        width: 40px;
    }

    #yellow-text {
        color: #EFC41A;
    }
`

export const ProfileContainer = styled.div`
    border-radius: 15px;
    display: grid;
    grid-template-rows: 450px 1fr;
    width: 340px;
    height: 100%;
`

export const InfoCard = styled.div`    
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    display: grid;
    grid-template-rows: 1fr 80px;
    height: 450px;
    border-radius: 15px;
    position: relative;

    #img-container {
        height: 450px;
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        border-radius: 15px;

        img {
            max-width: 340px;
            max-height: 350px;
        }

        div {
            padding-left: 10px;
            padding-top: 10px;
            display: flex;
            flex-direction: column;
            justify-self: center;
        }
    }
`

export const ButtonContainer = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #3b022b;

    button {
        height: 70px;
        width: 70px;
        border: none;
        cursor: pointer;
        border-radius: 35px;

        &:active {
            filter: invert(10%) sepia(10%) saturate(350%) hue-rotate(110deg) brightness(87%) contrast(205%);
        }
    }

    #heart-img {
        position: relative;
        top: -64.6px;
        left: -2px;
        height: 50px;
        width: 57px;
    }

    #background-img{
        height: 70px;
        width: 70px;
    }

    #reject-button {
        border: none;
        cursor: pointer;

        img {
            height: 70px;
            width: 70px;
        }

        &:active {
            filter: invert(10%) sepia(10%) saturate(350%) hue-rotate(380deg) brightness(87%) contrast(205%);
        }
    } 
`

export const MatchesContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    padding: 10px 20px;
    width: calc(100% - 40px);

    img {
        height: 60px;
        width: 60px;
        border-radius: 30px;
        margin-right: 20px;
    }

    &:hover{
        background-color: #26021c;
    }
`

export const ResetMatchContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
`