console.log('this is loaded');

const dotenv = require('dotenv')
const buf = new Buffer('BASIC=basic')
const config = dotenv.parse(buf) // will return an object
console.log(typeof config, config) // object 


exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
  access_token: process.env.SPORIFY_ACCESS_TOKEN
};
