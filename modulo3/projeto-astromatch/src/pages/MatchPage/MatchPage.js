import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseUrl } from '../../constants/BaseUrl'
import { MatchCard } from '../../styles'

export default function MatchPage(props) {

    const [matchesList, setMatchesList] = useState([])

    useEffect(() => {
        getMatches()
    }, [matchesList])

    const getMatches = () => {
        axios.get(`${BaseUrl}/matches`)
            .then((response) => {
                setMatchesList(response.data.matches)
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }


    const renderizedMatches = matchesList.map((match) => {
        return <MatchCard key={match.id}>
            <img src={match.photo} alt='Foto do Perfil' />
            <p>{match.name}</p>
        </MatchCard>
    })

    return (
        <>
            {renderizedMatches}
        </>)
}