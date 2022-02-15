import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const navigate = useNavigate()

    const goToListTrips = () => {
        navigate('/trips/list')
    }

    const goToAdminHome = () => {
        navigate('/admin/trips/list')
    }

    return (
        <>
            <img alt='Logo do site' />
            <button onClick={goToListTrips}>Ver Viagens</button>
            <button onClick={goToAdminHome}>Área do Admin</button>
        </>
    )
}