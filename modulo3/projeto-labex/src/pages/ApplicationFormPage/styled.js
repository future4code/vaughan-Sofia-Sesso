import styled from 'styled-components'

export const ApplicationFormPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF68E;
    height: calc(100vh - 70px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40vw;

        input {
            width: calc(100% - 20px);
            margin-bottom: 15px;
            padding: 10px;
            background-color: #232E7A;
            border: none;
            border-bottom: #FFF68E 2px solid;
            color: #FFF68E;
            border-radius: 5px 5px 0 0;
            height: 30px;
            font-size: 18px;

            &:focus{
                outline: none;
            }
        }

        select {
            width: 100%;
            margin-bottom: 15px;
            padding: 10px;
            background-color: #232E7A;
            border: none;
            color: #FFF68E;
            border-radius: 5px;
            height: 50px;
            font-size: 18px;
        }

        #button-container {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
        }

        @media (max-width: 376px) {
            width: 90vw;
        }
    }
`