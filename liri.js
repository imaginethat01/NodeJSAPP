var fs = require('fs')
 var dotenv = require('dotenv').config()

var keys = require('./keys.js')

var request = require('request');
var action = process.argv[2];

switch (action) {
    case "my-tweets":
      myTweets();
      break;
    
    case "spotify-this-song":
      spotifySearch();
      artistData();
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
    var keys = require('./keys.js');

    var spotify = new Spotify(keys.spotify);

 var trackName = process.argv[3] + '+' + process.argv[4]
 var queryQRL = 'https://api.spotify.com/v1/search?query=' + trackName + '&type=track&offset=5&limit=10'

spotify
.request(queryQRL)
  .then(function(response) {
    console.log(response) 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 

  });
}



function artistData() { 

  var Spotify = require('node-spotify-api');
  var keys = require('./keys.js');

  var spotify = new Spotify(keys.spotify);


var queryQRL = "https://api.spotify.com/v1/artists/5ksRONqssB7BR161NTtJAm"
spotify
.request(queryQRL)
  .then(function(response) {
    console.log(response) 
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
      var keys = require('./keys.js');
    
      var spotify = new Spotify(keys.spotify);
      
     spotify.request({ type: 'track', query: 'Never Gonna Give You Up', limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log(data); 
    });
    
      }
    
    
