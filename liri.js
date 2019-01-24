require("dotenv").config();

const axios = require("axios")

const Spotify = require('node-spotify-api');
 
const options = {
  provider: process.env.SPOTIFY_ID,
  apiKey: process.env.SPOTIFY_SECRET
};

// make a variable for bandsintown
var artist = process.argv[3];


// running a request for the band

var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

console.log(queryURL)

axios
.get(queryURL)
.then(function(response){
  console.log(response.data);
  console.log(response.data.Released);
});

var movie = process.argv[3];

// "http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy"

var movieQueryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

console.log(movieQueryURL)

axios
.get(movieQueryURL)
.then(function(response){
  console.log(response.data);
  console.log(response.data.Released);
});