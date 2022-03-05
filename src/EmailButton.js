import { Component } from "react";

class EmailButton extends Component {

    getImageUrls() {
        return this.props.tracks.map(track => track.albumArt);
    }

    sendEmail() {
        let urls = {"urls": getImageUrls()};
        console.log(urls);
        const response = fetch("https://7kacgsegll.execute-api.eu-west-1.amazonaws.com/prod", 'POST', body=urls).then(data => console.log(data));
    }

    render() {
        <button className="emailButton" onClick={() => this.sendEmail()}>
                Email pdf images
              </button>
    }
}

export default EmailButton;


