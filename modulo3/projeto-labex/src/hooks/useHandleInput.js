import { useState } from 'react'

export const useHandleInput = () => {
    const [input, setInput] = useState("")

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const eraseInput = () => {
        setInput("")
    }

    return [input, handleInput, eraseInput]
}