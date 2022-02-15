import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminHomePage() {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const goToCreateTrip = () => {
        navigate('/admin/trips/create')
    }

    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <>
            <h2>Painel Administrativo</h2>
            <div>
                <button onClick={goToHome}>Voltar</button>
                <button onClick={goToCreateTrip}>Criar Viagem</button>
                <button onClick={goToLogin}>Logout</button>
            </div>
        </>
    )
}