import React from 'react'
import error from '../../assets/error.png'
import { ErrorPageContainer } from './styled'
import Typography from '@material-ui/core/Typography'

const ErrorPage = () => {
    return <ErrorPageContainer>
        <img src={error} alt='Ícone da página de erro' />
        <Typography color='secondary' variant='h4' align='center' >Erro 404 - Página Não Encontrada</Typography>
    </ErrorPageContainer>
}

export default ErrorPage