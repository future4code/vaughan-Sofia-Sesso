import React, { useState } from 'react'
import { useGoToPage } from '../../hooks/useGoToPage'
import { useNavigate } from 'react-router-dom'
import { useVerifyToken } from '../../hooks/useVerifyToken'
import { BaseUrl } from '../../constants/BaseUrl'
import { useGetData } from '../../hooks/useGetData'
import { useToken } from '../../hooks/useToken'
import axios from 'axios'
import trashcan from '../../images/trashcan.png'
import { AdminHomePageContainer, DeleteButton } from './styled'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Loading } from '../../styled'
import rocket from '../../images/rocket.png'

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

    const [isLoadingDelete, setIsLoadingDelete] = useState(false)

    const deleteTrip = (id) => {
        setIsLoadingDelete(true)
        if (window.confirm("Tem certeza que deseja essa viagem?")) {
            axios.delete(`${BaseUrl}/trips/${id}`, authorization)
                .then(() => {
                    alert("Viagem deletada com sucesso!")
                    getData(`${BaseUrl}/trips`)
                    setIsLoadingDelete(false)
                })
                .catch((err) => {
                    setIsLoadingDelete(false)
                    alert(err.response.data.message)
                })
        }
    }

    const tripsList = trips && trips.trips.map((trip) => {
        return <Card
            sx={{ width: 500, backgroundColor: '#232E7A', display: 'flex', mb: '15px', justifyContent: 'space-between', '@media (max-width: 376px)': { width: '90%' } }}
            key={trip.id}
        >
            <CardContent key={trip.id} sx={{ color: '#FFF68E', cursor: 'pointer' }}>
                <Typography onClick={() => goToTripDetail(trip.id)}>{trip.name}</Typography>
            </CardContent>
            <DeleteButton onClick={() => deleteTrip(trip.id)}>
                <img id='delete-button' src={trashcan} alt='Ícone de remover viagem' />
            </DeleteButton>
        </Card>
    })

    return (
        <AdminHomePageContainer>
            <Typography variant='h4'
                sx={{ textAlign: 'center', mb: '15px', padding: '10px 0', backgroundColor: '#232E7A', width: '100%', '@media (max-width: 376px)': { fontSize: '20px' } }}
            >Painel Administrativo</Typography>

            {isLoading || isLoadingDelete &&
                <Loading>
                    <img src={rocket} alt='Imagem foguete' />
                    <Typography variant='h4' sx={{ textAlign: 'center' }}>Carregando...</Typography>
                </Loading>
            }
            {!isLoading && !isLoadingDelete && error && <p>Ocorreu um erro na requisição</p>}
            {!isLoading && !isLoadingDelete && trips && tripsList}
            {!isLoading && !isLoadingDelete && trips && tripsList.length === 0 && <p>Não há nenhuma viagem disponível</p>}

            <Stack direction="row" sx={{ '@media (max-width: 376px)': { flexDirection: 'column' } }}>
                <Button color="secondary" sx={{ backgroundColor: '#232E7A', width: '140px' }} onClick={goToHome}>Voltar</Button>
                <Button color="secondary" sx={{ backgroundColor: '#232E7A', width: '140px', ml: '16px', '@media (max-width: 376px)': { ml: 0, mt: '10px' } }} onClick={goToCreateTrip}>Criar Viagem</Button>
                <Button color="secondary" sx={{ backgroundColor: '#232E7A', width: '140px', ml: '16px', '@media (max-width: 376px)': { ml: 0, mt: '10px', mb: '20px' } }} onClick={logout}>Logout</Button>
            </Stack>
        </AdminHomePageContainer>
    )
}