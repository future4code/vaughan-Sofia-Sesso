import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/users'
import { FormContainer, TextFieldStyled, ButtonStyled } from './styled'

const SignUpForm = ({ setButtonText }) => {
    const navigate = useNavigate()

    const [form, onChange, clear] = useForm({
        username: "",
        email: "",
        password: ""
    })

    const onSubmitSignUpForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate, setButtonText)
    }

    return <FormContainer onSubmit={onSubmitSignUpForm}>
        <TextFieldStyled
            label="Nome de Usuário"
            variant="outlined"
            color="secondary"
            name={'username'}
            value={form.username}
            onChange={onChange}
            required
        />
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
            inputProps={{ pattern: '^.{8,30}', title: "A senha precisa ter no mínimo 8 e no máximo 30 caracteres" }}
            required
        />
        <ButtonStyled
            type='submit'
            variant="outlined"
            color="secondary"
        >Criar Conta
        </ButtonStyled>
    </FormContainer>
}

export default SignUpForm