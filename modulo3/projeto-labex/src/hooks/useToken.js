export const useToken = () => {
    const token = localStorage.getItem("token")

    const authorization = {
        headers: {
            auth: token
        }
    }

    return authorization
}