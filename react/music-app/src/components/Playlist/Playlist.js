import React, { Component } from "react";
import "./Playlist.css";
import Tracklist from "../Tracklist/Tracklist";

class Playlist extends Component {
  constructor(props) {
    super(props);

    // this.state = {};
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div classname="Playlist">
        <input onChange={this.handleNameChange} defaultValue="New Playlist" />
        <Tracklist
          tracks={this.props.playlistTracks}
          isRemoval={true}
          onRemove={this.props.onRemove}
        />
        <button classname="Playlist-save" onClick={this.props.onSave}>
          Save to Spotify
        </button>
      </div>
    );
  }
}

export default Playlist;
