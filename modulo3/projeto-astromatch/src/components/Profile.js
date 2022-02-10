import React from 'react'
import { ProfileContainer, InfoCard, ButtonContainer } from '../styles'
import reject from '../images/reject.png'
import heart from '../images/heart.png'
import loading from '../images/loading.png'
import { Heart } from '../components/LoadingAnimation'

export default function Profile(props) {

    return (
        <ProfileContainer>
            {props.profile.photo && props.profile.name
                && props.profile.age && props.profile.bio ?
                (
                    <InfoCard style={{ backgroundImage: `url(${props.profile.photo})` }}>
                        <div id='img-container'>
                            <img src={props.profile.photo} alt='Foto do Perfil' />
                            <div>
                                <h2>{props.profile.name}, {props.profile.age}</h2>
                                <p>{props.profile.bio}</p>
                            </div>
                        </div>
                    </InfoCard>
                ) :
                <Heart src={loading} alt='Icone de carregando' />
            }
            <ButtonContainer>
                <button id='reject-button' onClick={props.getProfileToChoose}><img src={reject} alt='Icone Rejeitar' /></button>
                <button onClick={() => props.choosePerson(props.profile.id)}>
                    <div id='heart-button'>
                        <img id='background-img' src={reject} alt='Icone de rejeitar perfil' />
                        <img id='heart-img' src={heart} alt='Icone de aceitar perfil' />
                    </div>
                </button>
            </ButtonContainer>
        </ProfileContainer>)
}