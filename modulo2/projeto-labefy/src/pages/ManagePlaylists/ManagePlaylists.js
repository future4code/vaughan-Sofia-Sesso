import React from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { axiosConfig } from "../../constants/urls"
import { PlaylistContainer } from "./styled"

export default class ManagePlaylists extends React.Component {
    state = {
        playlistNameInput: "",
        playlists: []
    }
    
    componentDidMount () {
        this.getAllPlaylists()
    }

    onChangePlaylistName = (event) => {
        this.setState({playlistNameInput: event.target.value})
    }

    createPlaylist = () => {
        const body = {
            name: this.state.playlistNameInput
        }

        axios.post(BASE_URL, body, axiosConfig)
        .then(() => {
            alert("Playlist criada com sucesso!")
            this.setState({playlistNameInput: ""})
            this.getAllPlaylists()
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    }

    getAllPlaylists = () => {
        axios.get(BASE_URL, axiosConfig)
        .then((response) => {
            this.setState({playlists: response.data.result.list})
        })
        .catch((error) => {
            alert(error.response.data)
        })
    }

    deletePlaylist = (id) => {
        axios.delete(`${BASE_URL}/${id}`, axiosConfig)
        .then(() => {
            alert("Playlist deletada com sucesso!")
            this.getAllPlaylists()
        })
        .catch((error) => {
            alert(error.response.data)
        })
    }

    render () {
        const listOfPlaylists = this.state.playlists.map ((playlist) => {
            return <PlaylistContainer key={playlist.id}>
                <p onClick={() => this.props.switchToTracks(playlist)}>{playlist.name}</p>
                <button onClick={() => this.deletePlaylist(playlist.id)}>Deletar Playlist</button>
            </PlaylistContainer>
        })

        return (<>
            <div>
                <input 
                    type="text" 
                    value={this.state.playlistNameInput} 
                    onChange={this.onChangePlaylistName}
                    placeholder="Nome da sua Playlist"
                />
                <button onClick={this.createPlaylist}>Criar Playlist</button>
            </div>
            <div>
                {listOfPlaylists}               
            </div>
        </>)
    }
}