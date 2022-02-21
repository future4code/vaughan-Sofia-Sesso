import React from 'react'
import useForm from '../../hooks/useForm'
import { login } from '../../services/users'
import { useNavigate } from 'react-router-dom'
import { FormContainer, TextFieldStyled, ButtonStyled } from './styled'

const LoginForm = ({ setButtonText }) => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({
        email: "",
        password: ""
    })

    const onSubmitLogin = (event) => {
        event.preventDefault()
        login(form, clear, navigate, setButtonText)
    }

    return <FormContainer onSubmit={onSubmitLogin}>
        <TextFieldStyled
            label="E-mail"
            variant="outlined"
            color="secondary"
            name={'email'}
            value={form.email}
            onChange={onChange}
            type='email'
            required
        />
        <TextFieldStyled
            label="Senha"
            variant="outlined"
            color="secondary"
            name={'password'}
            value={form.password}
            onChange={onChange}
            type='password'
            required
        />
        <ButtonStyled
            type='submit'
            variant="outlined"
            color="secondary"
        >Entrar
        </ButtonStyled>
    </FormContainer>
}

export default LoginForm