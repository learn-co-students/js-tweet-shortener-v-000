'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
  tweet = tweet.replace(/ hello /g, " hi ");
  tweet = tweet.replace(/ Hello /g, " hi ");
  tweet = tweet.replace(/ to /g, " 2 ");
  tweet = tweet.replace(/ To /g, " 2 ");
  tweet = tweet.replace(/ two /g, " 2 ");
  tweet = tweet.replace(/ Two /g, " 2 ");
  tweet = tweet.replace(/ too /g, " 2 ");
  tweet = tweet.replace(/ Too /g, " 2 ");
  tweet = tweet.replace(/ for /g, " 4 ");
  tweet = tweet.replace(/ For /g, " 4 ");
  tweet = tweet.replace(/ four /g, " 4 ");
  tweet = tweet.replace(/ Four /g, " 4 ");
  tweet = tweet.replace(/ be /g, " b ");
  tweet = tweet.replace(/ Be /g, " b ");
  tweet = tweet.replace(/ you /g, " u ");
  tweet = tweet.replace(/ You /g, " u ");
  tweet = tweet.replace(/ at /g, " @ ");
  tweet = tweet.replace(/ At /g, " @ ");
  tweet = tweet.replace(/ and /g, " & ");
  tweet = tweet.replace(/ And /g, " & ");
  return tweet;
},

  bulkShortener: function(tweet_array){
    var new_tweet_array = [];
    tweet_array.forEach(function(tweet){
      new_tweet_array.push(tweetShortener.wordSubstituter(tweet));
    });
    return new_tweet_array
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },

  shortenedTruncator: function(tweet){
    if (tweet.length < 140) {
      return tweet;
    } else {
      tweet = tweetShortener.wordSubstituter(tweet);
      if (tweet.length > 140) {
        return tweet.substr(0, 137) + "...";
    } else {
        return tweet;
      }
    }
  }
};

