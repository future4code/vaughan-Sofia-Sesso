import React from 'react'
import { useGoToPage } from '../../hooks/useGoToPage'
import { useParams } from 'react-router-dom'
import { useVerifyToken } from '../../hooks/useVerifyToken'
import { useGetData } from '../../hooks/useGetData'
import { BaseUrl } from '../../constants/BaseUrl'
import { useToken } from '../../hooks/useToken'
import MappedCandidates from '../../components/MappedCandidates'
import { TripDetailsPageContainer } from './styled'
import { Loading } from '../../styled'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import rocket from '../../images/rocket.png'


export default function TripDetailsPage() {
    useVerifyToken()

    const goToAdminHome = useGoToPage('/admin/trips/list')

    const params = useParams()
    const authorization = useToken()

    const [clickedTrip, isLoading, error, getData] = useGetData(`${BaseUrl}/trip/${params.id}`, authorization)

    return (
        <>
            {isLoading &&
                <Loading>
                    <img src={rocket} alt='Imagem foguete' />
                    <Typography variant='h4' sx={{ textAlign: 'center' }}>Carregando...</Typography>
                </Loading>
            }
            {!isLoading && error && <Typography>Ocorreu um erro na requisição</Typography>}
            {!isLoading && clickedTrip &&

                <TripDetailsPageContainer>

                    <Card sx={{ width: 500, backgroundColor: '#232E7A', mt: '20px', '@media (max-width: 376px)': { width: '90%' } }}>
                        <CardContent sx={{ color: '#FFF68E' }}>
                            <Typography variant='h4' sx={{ textAlign: 'center' }}>{clickedTrip.trip.name}</Typography>
                            <Typography><strong>Nome: </strong>{clickedTrip.trip.name}</Typography>
                            <Typography><strong>Descrição: </strong>{clickedTrip.trip.description}</Typography>
                            <Typography><strong>Planeta: </strong>{clickedTrip.trip.planet}</Typography>
                            <Typography><strong>Duração: </strong>{clickedTrip.trip.durationInDays}</Typography>
                            <Typography><strong>Data: </strong>{clickedTrip.trip.date}</Typography>
                        </CardContent>
                    </Card>

                    <Button color="secondary" sx={{ backgroundColor: '#232E7A', width: '140px', mb: '15px' }} onClick={goToAdminHome}>Voltar</Button>

                    <Card sx={{ width: 500, backgroundColor: '#232E7A', '@media (max-width: 376px)': { width: '90%' } }}>
                        <CardContent sx={{ color: '#FFF68E' }}>
                            <Typography variant='h5' sx={{ textAlign: 'center' }}>Candidatos Pendentes</Typography>
                            <MappedCandidates
                                clickedTripId={clickedTrip.trip.id}
                                clickedTripCandidates={clickedTrip.trip.candidates}
                                message={<Typography>Não há candidatos pendentes</Typography>}
                                buttonsDisplay={'inline'}
                                getData={getData}
                            />
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 500, backgroundColor: '#232E7A', '@media (max-width: 376px)': { width: '90%' } }}>
                        <CardContent sx={{ color: '#FFF68E' }}>
                            <Typography variant='h5' sx={{ textAlign: 'center' }}>Candidatos Aprovados</Typography>
                            <MappedCandidates
                                clickedTripId={clickedTrip.trip.id}
                                clickedTripCandidates={clickedTrip.trip.approved}
                                message={<Typography>Não há candidatos aprovados</Typography>}
                                buttonsDisplay={'none'}
                                getData={getData}
                            />
                        </CardContent>
                    </Card>

                </TripDetailsPageContainer>
            }
        </>
    )
}