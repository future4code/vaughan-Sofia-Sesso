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

export const ProfileCard = styled.div`
    border-radius: 15px;
    display: grid;
    grid-template-rows: 450px 1fr;
    width: 340px;
    height: 100%;

    #info-container {
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
        display: grid;
        grid-template-rows: 1fr 80px;
        height: 450px;
        border-radius: 15px;

        #img-container {
            display: flex;
            justify-content: center;
            align-self: center;

            img {
                max-width: 340px;
                max-height: 370px;
            }
        }

        #text-container {
            width: 100%;
            justify-self: flex-end;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: #3b022b;    
            padding-top: 20px;        
        }
    }

    #button-container {
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
                border: 3px #EF3A47 solid;
            }

            img {
            height: 50px;
            width: 50px;
        }
    }
`

export const MatchCard = styled.div`
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

export const ResetMatch = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
`