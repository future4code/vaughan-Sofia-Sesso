import React from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { axiosConfig } from "../../constants/urls"
import { TrackContainer, TitleContainer, FormContainer, BodyContainer, DescriptionContainer } from "./styled"
import Trashcan from "../../images/trashcan.svg"

export default class ManageTracks extends React.Component {
    state = {
        tracks: [],
        trackNameInput: "",
        trackArtistInput: "",
        trackUrlInput: "",
    }

    componentDidMount() {
        this.getPlaylistTracks()
    }

    onChangeTrackName = (event) => {
        this.setState({ trackNameInput: event.target.value })
    }

    onChangeTrackArtist = (event) => {
        this.setState({ trackArtistInput: event.target.value })
    }

    onChangeTrackUrl = (event) => {
        this.setState({ trackUrlInput: event.target.value })
    }

    getPlaylistTracks = () => {
        axios.get(`${BASE_URL}/${this.props.playlist.id}/tracks`, axiosConfig)
            .then((response) => {
                this.setState({ tracks: response.data.result.tracks })
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }

    addTrackToPlaylist = () => {
        const body = {
            name: this.state.trackNameInput,
            artist: this.state.trackArtistInput,
            url: this.state.trackUrlInput
        }

        axios.post(`${BASE_URL}/${this.props.playlist.id}/tracks`, body, axiosConfig)
            .then((response) => {
                alert("Música adicionada com sucesso!")
                this.setState({ trackNameInput: "", trackArtistInput: "", trackUrlInput: "" })
                this.getPlaylistTracks()
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    removeTrackFromPlaylist = (id) => {
        if (window.confirm("Tem certeza que deseja remover essa música da playlist?")) {
            axios.delete(`${BASE_URL}/${this.props.playlist.id}/tracks/${id}`, axiosConfig)
                .then((response) => {
                    alert("Música deletada com sucesso!")
                    this.getPlaylistTracks()
                })
                .catch((error) => {
                    alert(error.response.data)
                })
        }
    }

    render() {
        const tracksList = this.state.tracks.map((track, index) => {
            let urlSplit = track.url.split("https://open.spotify.com/")
            urlSplit[0] = "https://open.spotify.com/embed/"
            const newUrl = urlSplit.join('')

            return <TrackContainer key={track.id}>
                <p id="number">{this.state.tracks.indexOf(track) + 1}</p>
                <iframe
                    src={newUrl}
                    allow="encrypted-media"
                >
                </iframe>
                <p id="nome">{track.name}</p>
                <p id="artista">{track.artist}</p>
                <button id="deleteButton" onClick={() => this.removeTrackFromPlaylist(track.id)}><img src={Trashcan} alt="Icone Remover Musica" /></button>
            </TrackContainer>
        })

        return (<BodyContainer>
            <TitleContainer>
                <h2>{this.props.playlist.name}</h2>
                <button onClick={this.props.switchToPlaylists}>Voltar</button>
            </TitleContainer>
            <FormContainer>
                <input
                    type="text"
                    value={this.state.trackNameInput}
                    onChange={this.onChangeTrackName}
                    placeholder="Nome"
                />
                <input
                    type="text"
                    value={this.state.trackArtistInput}
                    onChange={this.onChangeTrackArtist}
                    placeholder="Artista"
                />
                <input
                    id="url"
                    type="url"
                    value={this.state.trackUrlInput}
                    onChange={this.onChangeTrackUrl}
                    placeholder="URL"
                />
                <button onClick={this.addTrackToPlaylist} >Adicionar Música</button>
            </FormContainer>
            <DescriptionContainer>
                <p id="hash">#</p>
                <p id="title">Título</p>
                <p id="artist">Artista</p>
            </DescriptionContainer>
            <div>
                {tracksList}
            </div>
        </BodyContainer>)
    }
}