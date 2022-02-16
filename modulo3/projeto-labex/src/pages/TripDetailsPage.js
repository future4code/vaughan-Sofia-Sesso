import React from 'react'
import { useGoToPage } from '../hooks/useGoToPage'
import { useParams } from 'react-router-dom'
import { useVerifyToken } from '../hooks/useVerifyToken'
import { useGetData } from '../hooks/useGetData'
import { BaseUrl } from '../constants/BaseUrl'
import { useToken } from '../hooks/useToken'
import MappedCandidates from '../components/MappedCandidates'


export default function TripDetailsPage() {
    useVerifyToken()

    const goToAdminHome = useGoToPage('/admin/trips/list')

    const params = useParams()
    const authorization = useToken()

    const [clickedTrip, isLoading, error] = useGetData(`${BaseUrl}/trip/${params.id}`, authorization)

    return (
        <>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro na requisição</p>}
            {!isLoading && clickedTrip &&
                <div>
                    <div>
                        <h3>{clickedTrip.trip.name}</h3>
                        <p><strong>Nome: </strong>{clickedTrip.trip.name}</p>
                        <p><strong>Descrição: </strong>{clickedTrip.trip.description}</p>
                        <p><strong>Planeta: </strong>{clickedTrip.trip.planet}</p>
                        <p><strong>Duração: </strong>{clickedTrip.trip.durationInDays}</p>
                        <p><strong>Data: </strong>{clickedTrip.trip.date}</p>
                    </div>
                    <button onClick={goToAdminHome}>Voltar</button>
                    <div>
                        <div>
                            <h3>Candidatos Pendentes</h3>
                            <MappedCandidates
                                clickedTripId={clickedTrip.trip.id}
                                clickedTripCandidates={clickedTrip.trip.candidates}
                                message={<p>Não há candidatos pendentes</p>}
                                buttonsDisplay={'inline'}
                            />
                        </div>
                        <div>
                            <h3>Candidatos Aprovados</h3>
                            <MappedCandidates
                                clickedTripId={clickedTrip.trip.id}
                                clickedTripCandidates={clickedTrip.trip.approved}
                                message={<p>Não há candidatos aprovados</p>}
                                buttonsDisplay={'none'}
                            />
                        </div>
                    </div>

                </div>
            }
        </>
    )
}