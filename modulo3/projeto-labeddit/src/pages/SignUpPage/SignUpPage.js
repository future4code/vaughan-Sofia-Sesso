import React from 'react'
import SignUpForm from './components/SignUpForm'
import { SignUpPageContainer } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUpPage = ({ setButtonText }) => {
    useUnprotectedPage()

    return <SignUpPageContainer>
        <SignUpForm setButtonText={setButtonText} />
    </SignUpPageContainer>
}

export default SignUpPage