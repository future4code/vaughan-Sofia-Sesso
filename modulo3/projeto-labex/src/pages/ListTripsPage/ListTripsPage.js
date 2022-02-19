import React from 'react'
import { useGetData } from '../../hooks/useGetData'
import { BaseUrl } from '../../constants/BaseUrl'
import { useGoToPage } from '../../hooks/useGoToPage'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { ContainerListTripPage, CardContainer } from './styled'
import { Loading } from '../../styled'
import rocket from '../../images/rocket.png'

export default function ListTripsPage() {
    const goToHome = useGoToPage('/')
    const goToApplicationForm = useGoToPage('/trips/application')

    const [trips, isLoading, error] = useGetData(`${BaseUrl}/trips`)

    const tripsList = trips && trips.trips.map((trip) => {
        return <Card sx={{ width: 500, backgroundColor: '#232E7A', '@media (max-width: 376px)': { width: '90%' } }}>
            <CardContent key={trip.id} sx={{ color: '#FFF68E' }}>
                <Typography><strong>Nome: </strong>{trip.name}</Typography>
                <Typography><strong>Descrição: </strong>{trip.description}</Typography>
                <Typography><strong>Planeta: </strong>{trip.planet}</Typography>
                <Typography><strong>Duração: </strong>{trip.durationInDays}</Typography>
                <Typography><strong>Data: </strong>{trip.date}</Typography>
            </CardContent>
        </Card>


    })

    return (
        <ContainerListTripPage>
            <Typography variant='h4'
                sx={{ textAlign: 'center', mb: '15px', padding: '10px 0', backgroundColor: '#232E7A', width: '100%', '@media (max-width: 376px)': { fontSize: '20px' } }}
            >Lista de Viagens</Typography>

            <CardContainer>
                {isLoading &&
                    <Loading>
                        <img src={rocket} alt='Imagem foguete' />
                        <Typography variant='h4' sx={{ textAlign: 'center' }}>Carregando...</Typography>
                    </Loading>
                }
                {!isLoading && error && <p>Ocorreu um erro na requisição</p>}
                {!isLoading && trips && tripsList}
                {!isLoading && trips && tripsList.length === 0 && <p>Não há nenhuma viagem disponível</p>}
            </CardContainer>

            <Stack spacing={2} direction="row">
                <Button color="secondary" sx={{ backgroundColor: '#232E7A', width: '140px' }} onClick={goToHome}>Voltar</Button>
                <Button color="secondary" sx={{ backgroundColor: '#232E7A', width: '140px' }} onClick={goToApplicationForm}>Inscrever-se</Button>
            </Stack>
        </ContainerListTripPage>
    )
}