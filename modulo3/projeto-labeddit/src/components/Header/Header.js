import { useNavigate } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar, Logo } from './styled'
import { goToFeed, goToLogin } from '../../routes/coordinator'
import logo from '../../assets/logo.png'


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
                <Button color="secondary" onClick={() => goToFeed(navigate)}>
                    <Logo
                        onClick={() => goToFeed(navigate)}
                        src={logo}
                        alt='Logo'
                    />LabEddit
                </Button>
                <Button color="secondary" onClick={() => buttonAction(navigate)}>{buttonText}</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header