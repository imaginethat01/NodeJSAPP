var fs = require('fs');
const dotenv = require('dotenv').config();
var keys = require('./keys.js');
var request = require('request');
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

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
 
var spotify = new Spotify(keys.spotify);

var args = process.argv.slice(2); 
var trackName = args.slice(1).join(' ');
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
  var client = new Twitter(keys.twitter);
  var params = {screen_name: 'imaginethatidea'};

  client.get('statuses/user_timeline', params, function(error, response, body ) {
  if (!error) { 
  for (var i=0; i<2; i++) {
  console.log( response[i].text );
  console.log( response[i].created_at );

}
}
});
}


function movieThis () {
    var args = process.argv.slice(2); 
    var movieName = args.slice(1).join(' '); 
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=473102bb";

  


  request(queryUrl, function(error, response, body) {
  var bodyParse = JSON.parse(body); 

  if (!error && response.statusCode === 200) {
  console.log( "\nTitle: " +  bodyParse.Title +
  "\nRelease Year: " +  bodyParse.Year +
  "\nIMDB: " +  bodyParse.imdbRating +
  "\nActors: " +  bodyParse.Actors +      
  "\nLanguage:" +  bodyParse.Language + 
  "\nCountry:" +  bodyParse.Country +
  "\nPlot:" +  bodyParse.Plot ) }

});
}

  function rickRoll () {

      fs.readFile('random.txt', 'utf8' , (err, data) => {
      if (err) throw err;
      console.log(data);

      var spotify = new Spotify(keys.spotify);
      spotify.search({ type: 'track', query: data , limit: 1 }, function(err, data) {
      if (err) { return console.log('Error occurred: ' + err); }
      console.log(data); 
});    
});
}