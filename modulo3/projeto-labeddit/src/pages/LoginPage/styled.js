import styled from "styled-components"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
`

export const TextFieldStyled = styled(TextField)`
    width: 80vw;
    max-width: 350px;
    margin-bottom: 20px;
`

export const ButtonStyled = styled(Button)`
    width: 80vw;
    max-width: 220px;
    margin-bottom: 20px;
`