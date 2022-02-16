import React from 'react'
import { useGoToPage } from '../hooks/useGoToPage'


export default function HomePage() {

    const goToListTrips = useGoToPage('/trips/list')
    const goToAdminHome = useGoToPage('/admin/trips/list')

    return (
        <>
            <img alt='Logo do site' />
            <button onClick={goToListTrips}>Ver Viagens</button>
            <button onClick={goToAdminHome}>Área do Admin</button>
        </>
    )
}