import React from 'react'
import { useHandleInput } from '../hooks/useHandleInput'

export default function LoginPage() {
    const [emailInput, handleEmailInput] = useHandleInput()
    const [passwordInput, handlePasswordInput] = useHandleInput()

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
            <button>Voltar</button>
            <button>Entrar</button>
        </>
    )
}