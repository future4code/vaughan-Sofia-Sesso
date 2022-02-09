import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseUrl } from '../../constants/BaseUrl'
import Profile from '../../components/Profile'

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

    return (
        <Profile
            profile={profile}
            getProfileToChoose={getProfileToChoose}
            choosePerson={choosePerson}
        />
    )
}