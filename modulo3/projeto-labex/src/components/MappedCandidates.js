import axios from 'axios'
import React, { useState } from 'react'
import { BaseUrl } from '../constants/BaseUrl'
import { useToken } from '../hooks/useToken'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { ButtonContainer } from '../pages/TripDetailsPage/styled'
import { Loading } from '../styled'
import rocket from '../images/rocket.png'

export default function MappedCandidates(props) {

    const authorization = useToken()

    const [isLoading, setIsLoading] = useState(false)

    const approveCandidate = (id, boolean) => {
        const body = {
            approve: boolean
        }

        setIsLoading(true)

        axios.put(`${BaseUrl}/trips/${props.clickedTripId}/candidates/${id}/decide`, body, authorization)
            .then(() => {
                if (body.approve) {
                    alert("Candidato aprovado!")
                    props.getData(`${BaseUrl}/trip/${props.clickedTripId}`, authorization)
                    setIsLoading(false)
                } else {
                    alert("Candidato reprovado!")
                    props.getData(`${BaseUrl}/trip/${props.clickedTripId}`, authorization)
                    setIsLoading(false)
                }
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    if (props.clickedTripCandidates.length > 0) {
        const candidates = props.clickedTripCandidates.map((candidate) => {
            return <div key={candidate.id}>
                <Typography><strong>Nome: </strong>{candidate.name}</Typography>
                <Typography><strong>Profissão: </strong>{candidate.profession}</Typography>
                <Typography><strong>Idade: </strong>{candidate.age}</Typography>
                <Typography><strong>País: </strong>{candidate.country}</Typography>
                <Typography ><strong>Texto de Candidatura:  </strong>{candidate.applicationText}</Typography>

                <div style={{ display: `${props.buttonsDisplay}` }}>
                    <ButtonContainer>
                        <Button color="secondary" sx={{ backgroundColor: '#8795DE', width: '140px' }}
                            onClick={() => approveCandidate(candidate.id, true)}>Aprovar</Button>
                        <Button color="secondary" sx={{ backgroundColor: '#8795DE', width: '140px' }}
                            onClick={() => approveCandidate(candidate.id, false)}>Reprovar</Button>
                    </ButtonContainer>
                </div>
            </div>
        })
        return candidates
    } else if (isLoading) {
        return <Loading>
            <img src={rocket} alt='Imagem foguete' />
            <Typography variant='h4' sx={{ textAlign: 'center' }}>Carregando...</Typography>
        </Loading>
    } else {
        return props.message
    }
}