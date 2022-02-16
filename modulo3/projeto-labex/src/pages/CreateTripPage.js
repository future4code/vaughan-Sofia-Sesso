import axios from 'axios'
import React, { useState } from 'react'
import { useGoToPage } from '../hooks/useGoToPage'
import { useHandleInput } from '../hooks/useHandleInput'
import { useVerifyToken } from '../hooks/useVerifyToken'
import { BaseUrl } from '../constants/BaseUrl'
import { useToken } from '../hooks/useToken'

export default function CreateTripPage() {

    useVerifyToken()

    const [nameInput, handleNameInput, eraseNameInput] = useHandleInput()
    const [dateInput, handleDateInput, eraseDateInput] = useHandleInput()
    const [descriptionInput, handleDescriptionInput, eraseDescriptionInput] = useHandleInput()
    const [daysInput, handleDaysInput, eraseDaysInput] = useHandleInput()
    const [planetInput, setPlanetInput] = useState("")

    const goToAdminHome = useGoToPage('/admin/trips/list')

    const planets = ["Mercúrio", "Vênus", "Terra", "Marte", "Jupiter", "Saturno", "Urano", "Netuno", "Plutão"]
    const authorization = useToken()

    const changePlanets = (event) => {
        setPlanetInput(event.target.value)
    }

    const createTrip = () => {
        const body = {
            name: nameInput,
            planet: planetInput,
            date: dateInput,
            description: descriptionInput,
            durationInDays: daysInput
        }

        axios.post(`${BaseUrl}/trips`, body, authorization)
            .then(() => {
                alert("Viagem criada com sucesso!")
                eraseNameInput()
                eraseDateInput()
                eraseDescriptionInput()
                eraseDaysInput()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <>
            <h2>Criar Viagem</h2>
            <input
                type='text'
                placeholder='Nome'
                value={nameInput}
                onChange={handleNameInput}
            />
            <select onChange={changePlanets}>
                <option value={""}>Escolha um Planeta</option>
                {planets.map((planet) => {
                    return (
                        <option key={planet} value={planet}>
                            {planet}
                        </option>
                    )
                })}
            </select>
            <input
                type='date'
                value={dateInput}
                onChange={handleDateInput}
            />
            <input
                type='text'
                placeholder='Descrição'
                value={descriptionInput}
                onChange={handleDescriptionInput}
            />
            <input
                type='number'
                placeholder='Duração em dias'
                value={daysInput}
                onChange={handleDaysInput}
            />
            <button onClick={goToAdminHome}>Voltar</button>
            <button onClick={createTrip}>Criar</button>
        </>
    )
}