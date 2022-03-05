import React, { Component } from "react";

class EmailButton extends Component {

    sendEmail() {
        let urls = {"urls": this.props.tracks.map(track => track.albumArt)};
        console.log(urls);
        fetch("https://7kacgsegll.execute-api.eu-west-1.amazonaws.com/prod", 'POST', urls).then(data => console.log(data));
    }

    render() {
        return(<button className="emailButton" onClick={() => this.sendEmail()}>
        Email pdf images
      </button>)
    }
}

export default EmailButton;


