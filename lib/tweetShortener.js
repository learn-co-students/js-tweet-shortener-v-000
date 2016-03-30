'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    tweet=tweet.replace(/hello/gi, "hi");
  	tweet=tweet.replace(/\bto\b|\btoo\b|\btwo\b/gi, "2");
  	tweet=tweet.replace(/\bfor\b|\bfour\b/gi, "4");
  	tweet=tweet.replace(/\bbe\b/gi, "b");
  	tweet=tweet.replace(/\byou\b/gi, "u");
  	tweet=tweet.replace(/\bat\b/gi, "@");
  	tweet=tweet.replace(/\band\b/gi, "&");

  	return tweet;
  },

  bulkShortener: function(tweet_array){
    return tweet_array.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    });
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet)
    } else {
      return tweet
    }
  },

  shortenedTruncator: function(tweet){
    tweet = tweetShortener.selectiveShortener(tweet)
    if (tweet.length > 140) {
      tweet = tweet.substr(0, 137) + "...";
    }
    return tweet;
  }
};
