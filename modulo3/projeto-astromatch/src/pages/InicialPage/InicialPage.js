import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseUrl } from '../../constants/BaseUrl'
import Profile from '../../components/Profile'
import { ProfileContainer, ButtonContainer } from '../../styles'
import reject from '../../images/reject.png'
import heart from '../../images/heart.png'

export default function InicialPage() {

    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios.get(`${BaseUrl}/person`)
            .then((response) => {
                setProfile(response.data.profile)
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }

    const choosePerson = (id) => {
        const body = {
            id: id,
            choice: true
        }

        axios.post(`${BaseUrl}/choose-person`, body)
            .then(() => {
                getProfileToChoose()
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }

    return (<ProfileContainer>
        <Profile
            profile={profile}
        />
        <ButtonContainer>
            <button id='reject-button' onClick={getProfileToChoose}><img src={reject} alt='Icone de rejeitar perfil' /></button>
            <button id='accept-button' onClick={() => choosePerson(profile.id)}><img src={heart} alt='Icone de aceitar perfil' /></button>
        </ButtonContainer>
    </ProfileContainer>
    )
}