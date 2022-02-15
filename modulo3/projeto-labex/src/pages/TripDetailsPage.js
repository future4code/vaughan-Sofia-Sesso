import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function TripDetailsPage() {
    const navigate = useNavigate()

    const goToAdminHome = () => {
        navigate('/admin/trips/list')
    }

    return (
        <>
            <div>
                <h3>Nome da viagem</h3>
            </div>
            <button onClick={goToAdminHome}>Voltar</button>
            <div>
                <h3>Candidatos Pendentes</h3>
            </div>
            <div>
                <h3>Candidatos Aprovados</h3>
            </div>
        </>
    )
}