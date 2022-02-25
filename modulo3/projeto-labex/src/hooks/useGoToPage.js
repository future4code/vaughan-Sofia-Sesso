import { useNavigate } from "react-router-dom"

export const useGoToPage = (url) => {
    const navigate = useNavigate()

    const goToPage = () => {
        navigate(url)
    }

    return goToPage
}