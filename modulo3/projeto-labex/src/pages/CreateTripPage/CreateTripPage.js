import axios from 'axios'
import React from 'react'
import { useGoToPage } from '../../hooks/useGoToPage'
import { useForm } from '../../hooks/useForm'
import { useVerifyToken } from '../../hooks/useVerifyToken'
import { BaseUrl } from '../../constants/BaseUrl'
import { useToken } from '../../hooks/useToken'
import { CreateTripPageContainer } from './styled'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function CreateTripPage() {
    useVerifyToken()

    const [form, onChange, clearForm] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const goToAdminHome = useGoToPage('/admin/trips/list')

    const planets = ["Mercúrio", "Vênus", "Terra", "Marte", "Jupiter", "Saturno", "Urano", "Netuno", "Plutão"]
    const authorization = useToken()
    const todaysDate = new Date().toISOString().slice(0, 10)

    const createTrip = (event) => {
        event.preventDefault()
        axios.post(`${BaseUrl}/trips`, form, authorization)
            .then(() => {
                alert("Viagem criada com sucesso!")
                clearForm()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <CreateTripPageContainer>
            <Typography variant='h4'
                sx={{ textAlign: 'center', mb: '15px', padding: '10px 0', backgroundColor: '#232E7A', width: '100%', '@media (max-width: 376px)': { fontSize: '20px' } }}
            >Criar Viagem</Typography>
            <form onSubmit={createTrip}>
                <input
                    placeholder='Nome'
                    name='name'
                    value={form.name}
                    onChange={onChange}
                    pattern={'^.{5,}'}
                    title={"O nome deve ter no mínimo 5 letras"}
                    required
                />
                <select name='planet' value={form.planet} onChange={onChange} required>
                    <option value={""}>Escolha um Planeta</option>
                    {planets.map((planet) => {
                        return (
                            <option key={planet}>
                                {planet}
                            </option>
                        )
                    })}
                </select>
                <input
                    type='date'
                    name='date'
                    value={form.date}
                    onChange={onChange}
                    min={todaysDate}
                    required
                />
                <input
                    placeholder='Descrição'
                    name='description'
                    value={form.description}
                    onChange={onChange}
                    pattern={'^.{30,}'}
                    title={"A descrição deve ter no mínimo 30 letras"}
                    required
                />
                <input
                    type='number'
                    placeholder='Duração em dias'
                    name='durationInDays'
                    value={form.durationInDays}
                    onChange={onChange}
                    min={50}
                    required
                />

                <div div id='button-container'>
                    <Button color="secondary" sx={{ backgroundColor: '#232E7A', width: '140px' }} onClick={goToAdminHome}>Voltar</Button>
                    <Button type='submit' color="secondary" sx={{ backgroundColor: '#232E7A', width: '140px' }}>Criar</Button>
                </div>

            </form>
        </CreateTripPageContainer>
    )
}