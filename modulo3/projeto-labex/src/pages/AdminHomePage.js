import React from 'react'
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

    const navigate = useNavigate()
    const goToTripDetail = (id) => {
        navigate(`/admin/trips/${id}`)
    }

    const logout = () => {
        localStorage.removeItem('token')
        goToLogin()
    }

    const [trips, isLoading, error, getData] = useGetData(`${BaseUrl}/trips`)

    const authorization = useToken()

    const deleteTrip = (id) => {
        if (window.confirm("Tem certeza que deseja essa viagem?")) {
            axios.delete(`${BaseUrl}/trips/${id}`, authorization)
                .then(() => {
                    alert("Viagem deletada com sucesso!")
                    getData(`${BaseUrl}/trips`)
                })
                .catch((err) => {
                    alert(err.response.data.message)
                })
        }
    }

    const tripsList = trips && trips.trips.map((trip) => {
        return <div key={trip.id}>
            <p onClick={() => goToTripDetail(trip.id)}>{trip.name}</p>
            <button onClick={() => deleteTrip(trip.id)}><img alt='Ícone de remover viagem' /></button>
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