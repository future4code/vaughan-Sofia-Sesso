import React from "react"
import { MainContainer, Button } from "./styled"
import homePageIcon from "../../images/homePageIcon.png"

export default function HomePage(props) {
    return <MainContainer>
        <h1>Playtime!</h1>
        <img 
            src={homePageIcon}
            alt="Icone Musica"
        ></img>
        <Button onClick={props.switchToPlaylists}><h3>Acesse suas Playlists</h3></Button>
    </MainContainer>
}