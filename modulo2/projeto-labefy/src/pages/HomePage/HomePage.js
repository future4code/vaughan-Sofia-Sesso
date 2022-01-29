import React from "react"
import { MainContainer, Button } from "./styled"

export default function HomePage(props) {
    return <MainContainer>
        <h1>Playtime!</h1>
        <img 
            src="https://cdn-icons.flaticon.com/png/512/2402/premium/2402461.png?token=exp=1643485143~hmac=4553c20f14113feb259f3397035202ee"
            alt="Icone Musica"
        ></img>
        <Button onClick={props.switchToPlaylists}><h3>Acesse suas Playlists</h3></Button>
    </MainContainer>
}