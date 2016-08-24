'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweet = tweet.replace(/hello/gi, "hi");
    var tweet = tweet.replace(/\bto\b|\btwo\b|\btoo\b/gi, "2");
    var tweet = tweet.replace(/\bfor\b|\bfour\b/gi, "4");
    var tweet = tweet.replace(/\bbe\b/gi, "b");
    var tweet = tweet.replace(/\byou\b/gi, "u");
    var tweet = tweet.replace(/\bat\b/gi, "@");
    var tweet = tweet.replace(/\band\b/gi, "&");
    return tweet;
    },

  bulkShortener: function(tweets){
    var shortTweets = tweets.map(function(tweet){
      return this.wordSubstituter(tweet);
    }, this);
    return shortTweets;
  },

  selectiveShortener: function(tweet){
    if (tweet.length >= 140){
      return this.wordSubstituter(tweet);
    } else {
    return tweet;
    }
  },

  shortenedTruncator: function(tweet){
    var shortTweet = this.selectiveShortener(tweet);
    if (shortTweet.length >= 140){
      return shortTweet.substring(0,137)+'...';
    }
    else {
      return tweet;
    }
  }
};
