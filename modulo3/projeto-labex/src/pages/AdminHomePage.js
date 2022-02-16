import React, { useEffect } from 'react'
import { useGoToPage } from '../hooks/useGoToPage'
import { useNavigate } from 'react-router-dom'
import { useVerifyToken } from '../hooks/useVerifyToken'
import { BaseUrl } from '../constants/BaseUrl'
import { useGetData } from '../hooks/useGetData'
import { useToken } from '../hooks/useToken'
import axios from 'axios'

export default function AdminHomePage() {

    useVerifyToken()

    const goToHome = useGoToPage('/')
    const goToCreateTrip = useGoToPage('/admin/trips/create')
    const goToLogin = useGoToPage('/login')

    const [trips, isLoading, error] = useGetData(`${BaseUrl}/trips`)

    const navigate = useNavigate()
    const goToTripDetail = (id) => {
        navigate(`/admin/trips/${id}`)
    }

    const authorization = useToken()

    const deleteTrips = (id) => {
        if (window.confirm("Tem certeza que deseja essa viagem?")) {
            axios.delete(`${BaseUrl}/tips/${id}`, authorization)
                .then((res) => {
                    alert("Viagem deletada com sucesso!")

                })
                .catch((err) => {
                    alert(err.response)
                })
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        goToLogin()
    }

    const tripsList = trips && trips.trips.map((trip) => {
        return <div key={trip.id}>
            <p onClick={() => goToTripDetail(trip.id)}>{trip.name}</p>
            <button onClick={() => deleteTrips(trip.id)}><img alt='Ícone de remover viagem' /></button>
        </div>
    })

    return (
        <>
            <h2>Painel Administrativo</h2>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro na requisição</p>}
            {!isLoading && trips && tripsList}
            {!isLoading && trips && tripsList.length === 0 && <p>Não há nenhuma viagem disponível</p>}
            <div>
                <button onClick={goToHome}>Voltar</button>
                <button onClick={goToCreateTrip}>Criar Viagem</button>
                <button onClick={logout}>Logout</button>
            </div>
        </>
    )
}