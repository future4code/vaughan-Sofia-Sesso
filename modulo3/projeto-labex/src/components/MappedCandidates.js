import axios from 'axios'
import React from 'react'
import { BaseUrl } from '../constants/BaseUrl'
import { useToken } from '../hooks/useToken'

export default function MappedCandidates(props) {

    const authorization = useToken()

    const approveCandidate = (id) => {
        const body = {
            approve: true
        }

        axios.put(`${BaseUrl}/trips/${props.clickedTripId}/candidates/${id}/decide`, body, authorization)
            .then((res) => {
                alert("Candidato aprovado!")
            })
            .catch((err) => {
                alert(err.response)
            })
    }

    const rejectCandidate = (id) => {
        const body = {
            approve: false
        }

        axios.put(`${BaseUrl}/trips/${props.clickedTripId}/candidates/${id}/decide`, body, authorization)
            .then((res) => {
                alert("Candidato reprovado!")
            })
            .catch((err) => {
                alert(err.response)
            })
    }

    if (props.clickedTripCandidates.length !== 0) {
        const candidates = props.clickedTripCandidates.map((candidate) => {
            return <div key={candidate.id}>
                <p><strong>Nome: </strong>{candidate.name}</p>
                <p><strong>Profissão: </strong>{candidate.profession}</p>
                <p><strong>Idade: </strong>{candidate.age}</p>
                <p><strong>País: </strong>{candidate.country}</p>
                <p><strong>Texto de Candidatura:  </strong>{candidate.applicationText}</p>
                <div style={{ display: `${props.buttonsDisplay}` }}>
                    <button onClick={() => approveCandidate(candidate.id)}>Aprovar</button>
                    <button onClick={() => rejectCandidate(candidate.id)}>Reprovar</button>
                </div>
            </div>
        })
        return candidates
    } else {
        return props.message
    }
}