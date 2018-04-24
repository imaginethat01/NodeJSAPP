# imaginethat01.github.io-NodeJSAPP
A simple text app using node js. 

Run these commands in example formats to see results.

node liri.js spotify-this-song + your-song-name-with-dashes 

= A spotify search based on those terms, and a href for app linking.
  An example search object using spotify's api call for "Blink 182's song / All the small things.

node liri.js + my-tweets

= A search of profile information. including tweets and A LOT of other information that should be trimmed. 

node liri.js + do-what-it-says 

= You'll see what it does. 


node liri.js + movie-this + your-movie-name-with-dashes

= Sorted information from OMDB based on the search.  

YOU WILL NEED.

NPM TWITTER
NPM SPOTIFY
NPM REQUEST
NPM DOTENV ( for your own testing)
NPM OMDB 

 "dotenv": "^5.0.1",
    "node-spotify-api": "^1.0.7",
    "omdb": "^0.8.0",
    "request": "^2.85.0",
    "twitter": "^1.7.1"
