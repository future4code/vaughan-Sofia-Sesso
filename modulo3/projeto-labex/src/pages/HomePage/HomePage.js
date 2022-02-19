import React from 'react'
import { useGoToPage } from '../../hooks/useGoToPage'
import homePageImage from '../../images/homePageImage.png'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { HomePageContainer } from './styled'

export default function HomePage() {
    const goToListTrips = useGoToPage('/trips/list')
    const goToAdminHome = useGoToPage('/admin/trips/list')

    return (
        <HomePageContainer>
            <img src={homePageImage} alt='Imagem da home page' />

            <Stack spacing={2} direction="row">
                <Button color="secondary" sx={{ backgroundColor: '#232E7A', width: '140px' }} onClick={goToListTrips}>Ver Viagens</Button>
                <Button color="secondary" sx={{ backgroundColor: '#232E7A', width: '140px' }} onClick={goToAdminHome}>Área do Admin</Button>
            </Stack>

        </HomePageContainer>
    )
}