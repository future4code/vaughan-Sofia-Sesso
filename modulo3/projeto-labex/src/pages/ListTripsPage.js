import React from 'react'
import { useGetData } from '../hooks/useGetData'
import { BaseUrl } from '../constants/BaseUrl'
import { useGoToPage } from '../hooks/useGoToPage'

export default function ListTripsPage() {

    const goToHome = useGoToPage('/')
    const goToApplicationForm = useGoToPage('/trips/application')

    const [trips, isLoading, error] = useGetData(`${BaseUrl}/trips`)

    const tripsList = trips && trips.trips.map((trip) => {
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
                {!isLoading && error && <p>Ocorreu um erro na requisição</p>}
                {!isLoading && trips && tripsList}
                {!isLoading && trips && tripsList.length === 0 && <p>Não há nenhuma viagem disponível</p>}
                <button onClick={goToApplicationForm}>Inscrever-se</button>
            </div>
        </>
    )
}