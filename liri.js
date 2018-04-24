require('dotenv').config()
require('node-spotify-api');
var request = require('request');
var action = process.argv[2];

switch (action) {
    case "my-tweets":
      myTweets();
      break;
    
    case "spotify-this-song":
      spotifySearch();
      break;
    
    case "movie-this":
      movieThis();
      break;
    
    case "do-what-it-says":
      rickRoll();
      break;
    }
    
function spotifySearch () {

    var Spotify = require('node-spotify-api');
 
    var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET,
    access_token: process.env.SPOTIFY_ACCESS_TOKEN
 })
  
 var searchItem = process.argv[3];
 var query = searchItem;

 spotify.search({ type: 'track', query , limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(data); 
});

    spotify
      .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
      .then(function(data) {
        console.log(data); 
      })
      .catch(function(err) {
        console.error('Error occurred: ' + err); 
      });


    }

function myTweets () {

    var Twitter = require('twitter');

    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    })

var params = {screen_name: 'imaginethatidea'};
client.get('statuses/user_timeline', params, function(error, response, body ) {
  if (!error) {
    console.log(response) } 
});
}

function movieThis () {
    var movieName = process.argv[3];
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=473102bb";
    request(queryUrl, function(error, response, body) {
    
      if (!error && response.statusCode === 200) {
          console.log( "Title: " + JSON.parse(body).Title +
                        "Release Year: " + JSON.parse(body).Year +
                        "IMDB: " + JSON.parse(body).imdbRating +
                        "Actors: " + JSON.parse(body).Actors +      
                        "Language:" + JSON.parse(body).Language + 
                        "Country:" + JSON.parse(body).Country +
                        "Plot:" + JSON.parse(body).Plot ) }
    });
    }

    function rickRoll () {
        
        
        var Spotify = require('node-spotify-api');
 
        var spotify = new Spotify({
        id: process.env.SPOTIFY_ID,
        secret: process.env.SPOTIFY_SECRET,
        access_token: process.env.SPOTIFY_ACCESS_TOKEN
     })
      
     var searchItem = process.argv[3];
     var query = searchItem;

     spotify.search({ type: 'track', query: 'Never Gonna Give You Up', limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log(data); 
    });
    
  
      }


    
    
