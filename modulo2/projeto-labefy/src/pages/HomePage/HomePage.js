import React from "react"
import { MainContainer, Button } from "./styled"

export default function HomePage(props) {
    return <MainContainer>
        <h1>Playtime!</h1>
        <Button onClick={props.switchToPlaylists}><h3>Acesse suas Playlists</h3></Button>
    </MainContainer>
}