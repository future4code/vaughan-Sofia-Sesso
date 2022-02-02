import React from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { axiosConfig } from "../../constants/urls"
import { PlaylistContainer, BodyContainer, FormContainer, DescriptionContainer } from "./styled"
import Trashcan from "../../images/trashcan.svg"

export default class ManagePlaylists extends React.Component {
    state = {
        playlistNameInput: "",
        playlists: []
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    onChangePlaylistName = (event) => {
        this.setState({ playlistNameInput: event.target.value })
    }

    createPlaylist = () => {
        const body = {
            name: this.state.playlistNameInput
        }

        axios.post(BASE_URL, body, axiosConfig)
            .then(() => {
                alert("Playlist criada com sucesso!")
                this.setState({ playlistNameInput: "" })
                this.getAllPlaylists()
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    getAllPlaylists = () => {
        axios.get(BASE_URL, axiosConfig)
            .then((response) => {
                this.setState({ playlists: response.data.result.list })
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }

    deletePlaylist = (id) => {
        if (window.confirm("Tem certeza que deseja deletar essa playlist?")) {
            axios.delete(`${BASE_URL}/${id}`, axiosConfig)
                .then(() => {
                    alert("Playlist deletada com sucesso!")
                    this.getAllPlaylists()
                })
                .catch((error) => {
                    alert(error.response.data)
                })
        }
    }

    render() {
        const listOfPlaylists = this.state.playlists.map((playlist) => {
            return <PlaylistContainer key={playlist.id}>
                <p>{this.state.playlists.indexOf(playlist) + 1}</p>
                <p id="playlistName" onClick={() => this.props.switchToTracks(playlist)}>{playlist.name}</p>
                <button id="deleteButton" onClick={() => this.deletePlaylist(playlist.id)}><img src={Trashcan} alt="Icone Remover Musica" /></button>
            </PlaylistContainer>
        })

        return (<BodyContainer>
            <h2>Playlists</h2>
            <FormContainer>
                <input
                    type="text"
                    value={this.state.playlistNameInput}
                    onChange={this.onChangePlaylistName}
                    placeholder="Nome da sua Playlist"
                />
                <button onClick={this.createPlaylist}>Criar Playlist</button>
            </FormContainer>
            <DescriptionContainer>
                <p id="hash">#</p>
                <p id="title">Título</p>
            </DescriptionContainer>
            <div>
                {listOfPlaylists}
            </div>
        </BodyContainer>)
    }
}