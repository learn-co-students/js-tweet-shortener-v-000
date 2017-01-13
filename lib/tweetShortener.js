'use strict';

var tweetShortener = {


  wordSubstituter: function(tweet){
    var tweet_array = tweet.split(" ")//tweet.replace(/[^\w\s]|_/g, function ($1) { return ' ' + $1 + ' ';}).replace(/[ ]+/g, ' ').split(' ');
    //debugger;
    for(var i = 0; i < tweet_array.length; i++){
      if (["hello"].indexOf(tweet_array[i].toLowerCase()) >= 0){
        tweet_array[i] = 'hi';
      } else if (["to" || "two"].indexOf(tweet_array[i].toLowerCase()) >= 0) {
        tweet_array[i] = "2";
      } else if (["too"].indexOf(tweet_array[i].toLowerCase()) >= 0) {
        tweet_array[i] = "2";
      } else if (["for" || "four"].indexOf(tweet_array[i].toLowerCase()) >= 0){
        tweet_array[i] = "4";
      } else if (["be"].indexOf(tweet_array[i].toLowerCase()) >= 0) {
        tweet_array[i] = "b"
      } else if (["you"].indexOf(tweet_array[i].toLowerCase()) >= 0) {
        tweet_array[i] = "u"
      } else if (["at"].indexOf(tweet_array[i].toLowerCase()) >= 0) {
        tweet_array[i] = "@"
      } else if (["and"].indexOf(tweet_array[i].toLowerCase()) >= 0) {
        tweet_array[i] = "&"
      }
    }
    return tweet_array.join(" ")
    //look at solutions for better logic/code..
  },
  bulkShortener: function(tweets){
    var new_tweets = [];
    for(var i = 0; i < tweets.length; i++){
      new_tweets.push(tweetShortener.wordSubstituter(tweets[i]));
    };
    return new_tweets;
  },
  selectiveShortener: function(tweet){
    var shortened_tweet = "";
    if (tweet.length > 140){
      shortened_tweet = tweetShortener.wordSubstituter(tweet);
      if (shortened_tweet.length > 140){
        var truncated_tweet = tweetShortener.shortenedTruncator(shortened_tweet);
        return truncated_tweet;
      } else {
        return shortened_tweet;
      }
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.length < 140) {
      return tweet;
    }

    var shortened_tweet = tweetShortener.wordSubstituter(tweet)
    
    if (shortened_tweet.length > 140) {
      var truncated_tweet = shortened_tweet.substring(0, 137) + "...";
      return truncated_tweet;
    } else {
      return shortened_tweet;
    }
  }
};

//"hello" becomes 'hi'
//"to, two, too" become '2'
//"for, four" become '4'
//'be' becomes 'b'
//'you' becomes 'u'
//"at" becomes "@"
//"and" becomes "&"
