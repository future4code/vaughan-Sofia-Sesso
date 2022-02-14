import { useState } from 'react'

export const useHandleInput = () => {
    const [input, setInput] = useState("")

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    return [input, handleInput]
}