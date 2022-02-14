import React from 'react'
import { useHandleInput } from '../hooks/useHandleInput'

export default function CreateTripPage() {
    const [nameInput, handleNameInput] = useHandleInput()
    const [dateInput, handleDateInput] = useHandleInput()
    const [descriptionInput, handleDescriptionInput] = useHandleInput()
    const [daysInput, handleDaysInput] = useHandleInput()

    console.log(dateInput)
    return (
        <>
            <h2>Criar Viagem</h2>
            <input
                type='text'
                placeholder='Nome'
                value={nameInput}
                onChange={handleNameInput}
            />
            <select>
                <option>Escolha um Planeta</option>
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
            <button>Voltar</button>
            <button>Criar</button>
        </>
    )
}