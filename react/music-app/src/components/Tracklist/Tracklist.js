import React, { Component } from "react";
import "./Tracklist.css";
import Track from "../Track/Track";

class Tracklist extends Component {
  render() {
    let tracks;
    if (this.props.tracks)
      tracks = this.props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={this.props.onAdd}
            isRemoval={this.props.isRemoval}
            onRemove={this.props.onRemove}
          />
        );
      });
    return <div className="Tracklist">{tracks}</div>;
  }
}

export default Tracklist;
