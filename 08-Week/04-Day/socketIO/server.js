var express = require('express'),
  app       = express(),
  logger    = require('morgan'),
  server    = require('http').createServer(app),
  Twit      = require('twit');

app.use(logger('dev'));

app.use(express.static('public')); //setup front end

server.listen(3000, function(){
  console.log("Server started");
})

var io = require('socket.io')(server);  //passing to socket.io module our server
//create access to twitter:
var twitter = new Twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token: process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
console.log(twitter);

//make connection for JS tweets and store in stream
var stream = twitter.stream('statuses/filter', {track: 'javascript'});
io.on('connect', function(socket){
//  stream.on('tweet', function(tweet){
//    socket.emit('tweets', tweet); //send to front end
//  });

  stream.on('tweet', function (tweet) {
    var data = {};
    data.name = tweet.user.name;
    data.screen_name = tweet.user.screen_name;
    data.text = tweet.text;
    data.user_profile_image = tweet.user.profile_image_url;
    socket.emit('tweets', data);
  });
});







