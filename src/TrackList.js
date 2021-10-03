import React, { Component } from 'react';
import './TrackList.css';

function Song(props) {
    return (
        <li className = "trackItem" key={props.name}>
          <img className="albumArt" src = {props.albumArt} style={{height: 150}}/>
          <strong>{props.name}</strong> - {props.artist}
        </li>
      )
}

class TrackList extends Component {
    renderSong(i){
        return(
            <Song
                name={this.props.tracks[i].name}
                artist={this.props.tracks[i].artist}
                albumArt={this.props.tracks[i].albumArt}
            />
        )
    }

    render() { 
        if (this.props.tracks.length > 1) {
            return (
                <div className = "wrapper">
                    <ol className = "TrackList">
                        {this.props.tracks.map((track, index) => {
                            return (
                                <div >
                                        {this.renderSong(index)}
                                </div>   
                            );
                        })}
                    </ol>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
        
        
    }
}
 
export default TrackList;