import React from "react"
import ManagePlaylists from "./pages/ManagePlaylists/ManagePlaylists"
import ManageTracks from "./pages/ManageTracks/ManageTracks"

class App extends React.Component {
  state = {
    currentScreen: "playlists",
    clickedPlaylist: "" 
  }

  switchToPlaylists = () => {
    this.setState({currentScreen: "playlist", clickedPlaylist: ""})
  }

  switchToTracks = (playlist) => {
    this.setState({currentScreen: "tracks", clickedPlaylist: playlist})
  }

  switchScreens = () => {
    switch (this.state.currentScreen) {
      case "playlists":
        return <ManagePlaylists switchToTracks={this.switchToTracks}/>
      case "tracks":
        return <ManageTracks 
                switchToPlaylists={this.switchToPlaylists}
                playlist={this.state.clickedPlaylist}
              />
      default:
        return <ManagePlaylists switchToTracks={this.switchToTracks}/>
    }
  }

  render () {
    return <>{this.switchScreens()}</>
  }
}
export default App
