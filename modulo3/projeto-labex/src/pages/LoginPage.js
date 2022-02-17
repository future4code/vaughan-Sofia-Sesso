import axios from 'axios'
import React from 'react'
import { useForm } from '../hooks/useForm'
import { BaseUrl } from '../constants/BaseUrl'
import { useGoToPage } from '../hooks/useGoToPage'

export default function LoginPage() {
    const [form, onChange] = useForm({
        email: "",
        password: ""
    })

    const goToHome = useGoToPage('/')
    const goToAdminHome = useGoToPage('/admin/trips/list')

    const onSubmitLogin = (event) => {
        event.preventDefault()
        axios.post(`${BaseUrl}/login`, form)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                goToAdminHome()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <>
            <h2>Login</h2>

            <form onSubmit={onSubmitLogin}>
                <input
                    type='email'
                    placeholder='E-mail'
                    value={form.email}
                    name='email'
                    onChange={onChange}
                    required
                />
                <input
                    type='password'
                    placeholder='Senha'
                    value={form.password}
                    name='password'
                    onChange={onChange}
                    required
                />
                <button onClick={goToHome}>Voltar</button>
                <button>Entrar</button>
            </form>
        </>
    )
}