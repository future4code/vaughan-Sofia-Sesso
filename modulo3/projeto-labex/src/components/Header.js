import React from 'react'
import logo from '../images/logo.png'
import { HeaderContainer } from '../styled'
import Typography from '@mui/material/Typography'

export default function Header() {
    return (
        <HeaderContainer>
            <div>
                <img src={logo} alt='Logo do site' />
                <Typography sx={{ fontSize: 30, fontWeight: 'bolder' }}>LabeX</Typography>
            </div>
            <div id='tag-line'>
                <Typography sx={{ fontSize: 20, fontWeight: 'bolder' }}>Inscreva-se e conheça seu planeta favorito!</Typography>
            </div>
        </HeaderContainer>
    )
}