'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    tweet = tweet.replace(/hello/gi, "hi");
    tweet = tweet.replace(/\bto\b|\btoo\b|\btwo\b/gi, "2");
    tweet = tweet.replace(/\bfor\b|\bfour\b/gi, "4");
    tweet = tweet.replace(/\bbe\b/gi, "b");
    tweet = tweet.replace(/\byou\b/gi, "u");
    tweet = tweet.replace(/\bat\b/gi, "@");
    tweet = tweet.replace(/\band\b/gi, "&");
    return tweet;
  },
  bulkShortener: function(twit){
    return twit.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    })
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet).substr(0, 137) + "..."
    } else {
      return tweet;
    }
  }
};
