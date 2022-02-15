import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useHandleInput } from '../hooks/useHandleInput'

export default function LoginPage() {
    const [emailInput, handleEmailInput] = useHandleInput()
    const [passwordInput, handlePasswordInput] = useHandleInput()

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const goToAdminHome = () => {
        navigate('/admin/trips/list')
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
            <button onClick={goToAdminHome}>Entrar</button>
        </>
    )
}