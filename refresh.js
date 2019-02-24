// Dependencies
// =============================================================
require("dotenv").config();
var SpotifyWebApi = require('spotify-web-api-node');

// Spotify-Web-Api-Node
// =============================================================

var credentials = {
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri: process.env.REDIRECT_URI
};

var spotifyApi = new SpotifyWebApi(credentials);

var refreshToken = 'AQAgFBXoOgCyvuQXVQdDCLG0vvGyC8n_Uv5bZJIdYYtZbhHasiKMfIDIriKNqbNL_WMoYQFN3yjt4bAifjMhDlRU92dtsyB3iZ2mDa4y_e-f5Zhvx7M3lrxDygqB4pvcbPGYaQ';

spotifyApi.setRefreshToken(refreshToken);

// clientId, clientSecret and refreshToken has been set on the api object previous to this call.
spotifyApi.refreshAccessToken().then(
  function (data) {
    console.log('The access token has been refreshed!');

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function (err) {
    console.log('Could not refresh access token', err);
  }
);