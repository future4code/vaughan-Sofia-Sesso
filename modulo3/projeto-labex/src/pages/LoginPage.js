import axios from 'axios'
import React from 'react'
import { useHandleInput } from '../hooks/useHandleInput'
import { BaseUrl } from '../constants/BaseUrl'
import { useGoToPage } from '../hooks/useGoToPage'

export default function LoginPage() {
    const [emailInput, handleEmailInput] = useHandleInput()
    const [passwordInput, handlePasswordInput] = useHandleInput()

    const goToHome = useGoToPage('/')
    const goToAdminHome = useGoToPage('/admin/trips/list')

    const onSubmitLogin = () => {
        const body = {
            email: emailInput,
            password: passwordInput
        }

        axios.post(`${BaseUrl}/login`, body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                goToAdminHome()
            })
            .catch((err) => {
                alert(err.response)
            })
    }

    return (
        <>
            <h2>Login</h2>
            <input
                type='text'
                placeholder='E-mail'
                value={emailInput}
                onChange={handleEmailInput}
            />
            <input
                type='password'
                placeholder='Senha'
                value={passwordInput}
                onChange={handlePasswordInput}
            />
            <button onClick={goToHome}>Voltar</button>
            <button onClick={onSubmitLogin}>Entrar</button>
        </>
    )
}