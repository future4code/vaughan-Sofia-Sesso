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
                <Button sx={{ backgroundColor: '#232E7A', color: '#FFF68E' }} onClick={goToListTrips}>Ver Viagens</Button>
                <Button sx={{ backgroundColor: '#232E7A', color: '#FFF68E' }} onClick={goToAdminHome}>Área do Admin</Button>
            </Stack>

        </HomePageContainer>
    )
}