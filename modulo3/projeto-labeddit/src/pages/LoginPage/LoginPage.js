import React from 'react'
import LoginForm from './components/LoginForm'
import { LoginPageContainer, ButtonStyled } from './styled'
import { goToSignUp } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({ setButtonText }) => {
    useUnprotectedPage()

    const navigate = useNavigate()

    return <LoginPageContainer>
        <LoginForm
            setButtonText={setButtonText}
        />
        <ButtonStyled
            onClick={() => goToSignUp(navigate)}
            variant="outlined"
            color="secondary">Fazer Cadastro
        </ButtonStyled>
    </LoginPageContainer>
}

export default LoginPage