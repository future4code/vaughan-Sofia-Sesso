import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetData } from '../hooks/useGetData'
import { BaseUrl } from '../constants/BaseUrl'

export default function ListTripsPage() {
    const navigate = useNavigate()
    const [trips, isLoading] = useGetData(`${BaseUrl}/trips`)

    const goToHome = () => {
        navigate('/')
    }

    const goToApplicationForm = () => {
        navigate('/trips/application')
    }

    const tripsList = trips && trips.map((trip) => {
        return <div key={trip.id}>
            <p><strong>Nome: </strong>{trip.name}</p>
            <p><strong>Descrição: </strong>{trip.description}</p>
            <p><strong>Planeta: </strong>{trip.planet}</p>
            <p><strong>Duração: </strong>{trip.durationInDays}</p>
            <p><strong>Data: </strong>{trip.date}</p>
        </div>
    })

    return (
        <>
            <div>
                <button onClick={goToHome}>Voltar</button>
                <h2>Lista de Viagens</h2>
                {isLoading && <p>Carregando...</p>}
                {!isLoading && trips && tripsList}
                {!isLoading && trips && tripsList.length === 0 && <p>Não há nenhuma viagem disponível</p>}
                <button onClick={goToApplicationForm}>Inscrever-se</button>
            </div>
        </>
    )
}