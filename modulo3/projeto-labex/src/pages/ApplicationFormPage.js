import React, { useState } from 'react'
import { useGoToPage } from '../hooks/useGoToPage'
import { useHandleInput } from '../hooks/useHandleInput'
import { useGetData } from '../hooks/useGetData'
import { BaseUrl } from '../constants/BaseUrl'
import CountrySelector from '../components/CountrySelector'
import axios from 'axios'

export default function ApplicationFormPage() {
    const [nameInput, handleNameInput, eraseNameInput] = useHandleInput()
    const [ageInput, handleAgeInput, eraseAgeInput] = useHandleInput()
    const [textInput, handleTextInput, eraseTextInput] = useHandleInput()
    const [occupationInput, handleOccupationInput, eraseOccupationInput] = useHandleInput()
    const [trip, setTrip] = useState("")
    const [countryInput, setCountryInput] = useState("")

    const goToListTrips = useGoToPage('/trips/list')

    const [trips] = useGetData(`${BaseUrl}/trips`)

    const pickTrip = (event) => {
        setTrip(event.target.value)
    }

    const pickCountry = (event) => {
        setCountryInput(event.target.value)
    }

    const applyToTrip = () => {
        const body = {
            name: nameInput,
            age: ageInput,
            applicationText: textInput,
            profession: occupationInput,
            country: countryInput
        }

        axios.post(`${BaseUrl}/trips/${trip}/apply`, body)
            .then(() => {
                alert("Sua inscrição foi enviada com sucesso!")
                eraseNameInput()
                eraseAgeInput()
                eraseTextInput()
                eraseOccupationInput()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <>
            <h2>Inscreva-se para uma viagem</h2>
            <select onChange={pickTrip}>
                <option value={''}>Escolha uma Viagem</option>
                {trips && trips.trips.map((trip) => {
                    return (
                        <option key={trip.id} value={trip.id}>
                            {trip.name}
                        </option>
                    )
                })}
            </select>
            <input
                type='text'
                placeholder='Nome'
                value={nameInput}
                onChange={handleNameInput}
            />
            <input
                type='number'
                placeholder='Idade'
                value={ageInput}
                onChange={handleAgeInput}
            />
            <input
                type='text'
                placeholder='Texto de Candidatura'
                value={textInput}
                onChange={handleTextInput}
            />
            <input
                type='text'
                placeholder='Profissão'
                value={occupationInput}
                onChange={handleOccupationInput}
            />
            <CountrySelector
                pickCountry={pickCountry}
            />
            <button onClick={goToListTrips}>Voltar</button>
            <button onClick={applyToTrip}>Enviar</button>
        </>
    )
}