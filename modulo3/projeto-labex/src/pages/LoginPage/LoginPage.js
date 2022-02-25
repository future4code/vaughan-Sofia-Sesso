import axios from 'axios'
import React from 'react'
import { useForm } from '../../hooks/useForm'
import { BaseUrl } from '../../constants/BaseUrl'
import { useGoToPage } from '../../hooks/useGoToPage'
import { LoginPageContainer } from './styled'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'


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
        <LoginPageContainer>
            <Typography variant='h4'
                sx={{ textAlign: 'center', padding: '10px 0', backgroundColor: '#232E7A', width: '100%', '@media (max-width: 376px)': { fontSize: '20px' } }}
            >Login</Typography>

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

                <Stack spacing={2} direction="row">
                    <Button color="secondary" sx={{ backgroundColor: '#232E7A', width: '140px' }} onClick={goToHome}>Voltar</Button>
                    <Button type='submit' color="secondary" sx={{ backgroundColor: '#232E7A', width: '140px' }}>Entrar</Button>
                </Stack>

            </form>
        </LoginPageContainer >
    )
}