import React from "react"
import HomePage from "./pages/HomePage/HomePage"
import ManagePlaylists from "./pages/ManagePlaylists/ManagePlaylists"
import ManageTracks from "./pages/ManageTracks/ManageTracks"
import GlobalStyle from "./globalStyles"

class App extends React.Component {
  state = {
    currentScreen: "homepage",
    clickedPlaylist: ""
  }

  switchToPlaylists = () => {
    this.setState({ currentScreen: "playlist", clickedPlaylist: "" })
  }

  switchToTracks = (playlist) => {
    this.setState({ currentScreen: "tracks", clickedPlaylist: playlist })
  }

  switchScreens = () => {
    switch (this.state.currentScreen) {
      case "homepage":
        return <HomePage switchToPlaylists={this.switchToPlaylists} />

      case "playlists":
        return <ManagePlaylists switchToTracks={this.switchToTracks} />

      case "tracks":
        return <ManageTracks
          switchToPlaylists={this.switchToPlaylists}
          playlist={this.state.clickedPlaylist}
        />

      default:
        return <ManagePlaylists switchToTracks={this.switchToTracks} />
    }
  }

  render() {
    return <><GlobalStyle />{this.switchScreens()}</>
  }
}
export default App