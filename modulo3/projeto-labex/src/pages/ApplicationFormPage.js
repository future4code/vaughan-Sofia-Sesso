import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useHandleInput } from '../hooks/useHandleInput'

export default function ApplicationFormPage() {
    const [nameInput, handleNameInput] = useHandleInput()
    const [ageInput, handleAgeInput] = useHandleInput()
    const [textInput, handleTextInput] = useHandleInput()
    const [occupationInput, handleOccupationInput] = useHandleInput()

    const navigate = useNavigate()

    const goToListTrips = () => {
        navigate('/trips/list')
    }

    return (
        <>
            <h2>Inscreva-se para uma viagem</h2>
            <select>
                <option>Escolha uma Viagem</option>
            </select>
            <input
                type='text'
                placeholder='Nome'
                value={nameInput}
                onChange={handleNameInput}
            />
            <input
                type='text'
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
            <select>
                <option>Escolha um País</option>
            </select>
            <button onClick={goToListTrips}>Voltar</button>
            <button>Enviar</button>
        </>
    )
}