require("dotenv").config();

const axios = require("axios")

const Spotify = require('node-spotify-api');
 
const options = {
  provider: process.env.SPOTIFY_ID,
  apiKey: process.env.SPOTIFY_SECRET
};
