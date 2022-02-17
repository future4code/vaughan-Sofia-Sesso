import React, { useState } from 'react'
import { useGoToPage } from '../hooks/useGoToPage'
import { useForm } from '../hooks/useForm'
import { useGetData } from '../hooks/useGetData'
import { BaseUrl } from '../constants/BaseUrl'
import CountrySelector from '../components/CountrySelector'
import axios from 'axios'

export default function ApplicationFormPage() {
    const [form, onChange, clearForm] = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })

    const goToListTrips = useGoToPage('/trips/list')

    const [trips] = useGetData(`${BaseUrl}/trips`)

    const [tripId, setTripId] = useState("")

    const onChangeTrip = (event) => {
        setTripId(event.target.value)
    }

    const applyToTrip = (event) => {
        event.preventDefault()
        axios.post(`${BaseUrl}/trips/${tripId}/apply`, form)
            .then(() => {
                alert("Sua inscrição foi enviada com sucesso!")
                clearForm()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <>
            <h2>Inscreva-se para uma viagem</h2>
            <form onSubmit={applyToTrip}>
                <select onChange={onChangeTrip} required>
                    <option value={''}>Escolha uma Viagem</option>
                    {trips && trips.trips.map((trip) => {
                        return (
                            <option key={trip.id} value={trip.id}>
                                {trip.name} - {trip.planet}
                            </option>
                        )
                    })}
                </select>
                <input
                    placeholder='Nome'
                    name='name'
                    value={form.name}
                    onChange={onChange}
                    pattern={'^.{3,}'}
                    title={"O nome deve ter no mínimo 3 letras"}
                    required
                />
                <input
                    type='number'
                    placeholder='Idade'
                    name='age'
                    value={form.age}
                    onChange={onChange}
                    min={18}
                    required
                />
                <input
                    placeholder='Texto de Candidatura'
                    name='applicationText'
                    value={form.applicationText}
                    onChange={onChange}
                    pattern={'^.{30,}'}
                    title={"O texto de candidatura deve ter no mínimo 30 letras"}
                    required
                />
                <input
                    type='text'
                    placeholder='Profissão'
                    name='profession'
                    value={form.profession}
                    onChange={onChange}
                    pattern={'^.{10,}'}
                    title={"A profissão de candidatura deve ter no mínimo 10 letras"}
                    required
                />
                <CountrySelector
                    name={'country'}
                    value={form.country}
                    onChange={onChange}
                />
                <button onClick={goToListTrips}>Voltar</button>
                <button>Enviar</button>
            </form>
        </>
    )
}