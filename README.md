# Project
The project is a simple webpage to allow the user to log in to spotify and find out their 5 top songs from the last 4 weeks. It is built from the spotify examples for using their OAuth access to get the access token. 

![Display of 5 songs](https://github.com/JaneySlinger/spotify-top-month-tracks/example.png "Example usage of website")

## Installation

This app is based on the spotify examples. These examples run on Node.js. On [its website](http://www.nodejs.org/download/) you can find instructions on how to install it. You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm.

Once installed, clone the repository and install its dependencies running:

    $ npm install

## Start the authorization server
To enable logging in to spotify to get an access token:

    cd authorization_code
    node app.js

Then, open `http://localhost:8888` in a browser.

## Start the web app
To start the web app:

    cd client
    npm start

The webpage will then open in a browser on `http://localhost:3000`.

# Spotify Accounts Authentication Examples

This project contains basic demos showing the different OAuth 2.0 flows for [authenticating against the Spotify Web API](https://developer.spotify.com/web-api/authorization-guide/).

These examples cover:

* Authorization Code flow
* Client Credentials flow
* Implicit Grant flow
