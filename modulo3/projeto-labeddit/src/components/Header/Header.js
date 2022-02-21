import { useNavigate } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './styled'
import { goToFeed, goToLogin } from '../../routes/coordinator'


const Header = ({ buttonText, setButtonText }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
    }

    const buttonAction = () => {
        if (token) {
            logout()
            setButtonText("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToFeed(navigate)} color="secondary">LabEddit</Button>
                <Button onClick={() => buttonAction(navigate)} color="secondary">{buttonText}</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header