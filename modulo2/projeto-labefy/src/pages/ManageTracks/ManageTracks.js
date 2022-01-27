import React from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { axiosConfig } from "../../constants/urls"
import { TrackContainer, TitleContainer } from "./styled"

export default class ManageTracks extends React.Component {
    state = {
        tracks: [],
        trackNameInput: "",
        trackArtistInput: "",
        trackUrlInput: "",
    }

    componentDidMount () {
        this.getPlaylistTracks()
    }

    onChangeTrackName = (event) => {
        this.setState({trackNameInput: event.target.value})
    }

    onChangeTrackArtist = (event) => {
        this.setState({trackArtistInput: event.target.value})
    }

    onChangeTrackUrl = (event) => {
        this.setState({trackUrlInput: event.target.value})
    }

    getPlaylistTracks = () => {
        axios.get(`${BASE_URL}/${this.props.playlist.id}/tracks`, axiosConfig)
        .then((response) => {
            this.setState({tracks: response.data.result.tracks})
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
            this.setState({trackNameInput: "", trackArtistInput: "", trackUrlInput: ""})
            this.getPlaylistTracks()
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    }

    removeTrackFromPlaylist = (id) => {
        axios.delete(`${BASE_URL}/${this.props.playlist.id}/tracks/${id}`, axiosConfig)
        .then((response) => {
            alert("Música deletada com sucesso!")
            this.getPlaylistTracks()
        })
        .catch((error) => {
            alert(error.response.data)
        })
    }

    render () {
        const tracksList = this.state.tracks.map ((track) => {
            return <TrackContainer key={track.id}>
                <p>{track.name}</p>
                <p>{track.artist}</p>
                <button onClick={() => this.removeTrackFromPlaylist(track.id)}>Remover Música</button>
            </TrackContainer>
        })

        return (<div>
            <TitleContainer>
                <h3>{this.props.playlist.name}</h3>
                <button onClick={this.props.switchToPlaylists}>Voltar</button>
            </TitleContainer>
            <div>
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
                    type="url"
                    value={this.state.trackUrlInput}
                    onChange={this.onChangeTrackUrl}
                    placeholder="URL"
                />
                <button onClick={this.addTrackToPlaylist} >Adicionar Música</button>
            </div>
            <div>
                {tracksList}
            </div>
        </div>)
    }
}