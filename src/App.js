import React, { Component } from 'react';
import './App.css';
import TrackList from './TrackList.js';
import SpotifyWebApi from 'spotify-web-api-js';
import logo from './resources/logo.png'
import {SpotifyAuth} from 'react-spotify-auth'
import Cookies from 'js-cookie'
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();
    const token = params.access_token;
    if(token){
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      topTracks: [{
        name: '', 
        artist: '', 
        albumArt: ''}]
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  getTopSongs(){
    spotifyApi.getMyTopTracks({limit:5, time_range:"short_term"})
      .then((response) => {
        console.log("track information", response);
        this.setState({
          topTracks: response.items.map((item) => {
            return(
              {
                name: item.name,
                artist: item.artists[0].name,
                albumArt: item.album.images[0].url
              }
            )
          }),
          names: response.items.map(({name}) => name),
          artists: response.items.map(({artists}) => artists[0].name),
          albumArts: response.items.map(({album}) => album.images.url)
          
        })
        console.log(this.state.topTracks);
        }) 
  }

  render() { 
    return (
      <div className="App"> 
        <img className = "logo" src={logo} alt="spotify logo" style={{height: 80}}/>  
        <div>
          {/* If there is a cookie named 'spotifyAuthToken' */}
          {Cookies.get('spotifyAuthToken') ? (
            <div>
              <button className="checkButton" onClick={() => this.getTopSongs()}>
                Check Your Top Songs from the Last 4 Weeks
              </button>
              <div>
                <TrackList
                  tracks = {this.state.topTracks}
                />
              </div>
            </div>
          ) : (
          <SpotifyAuth
            redirectUri='http://localhost:3000/callback'
            clientID='c3d812e9f0fe4bc6a1b3c3a75bbfa4c6'
            scopes={['user-read-private', 'user-read-email', 'user-read-playback-state', 'user-top-read']}
            title="Log in with Spotify"
            noLogo='true'
            btnClassName='checkButton'
          />)}
        </div>
      </div>
      
    );
  }
}

export default App;
