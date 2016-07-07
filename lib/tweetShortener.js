'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    return tweet.replace(/\bhello\b/gi, "hi").replace(/\bto\b/gi, "2").replace(/\btwo\b/gi, "2").replace(/\btoo\b/gi, "2").replace(/\bfor\b/gi, "4")
    .replace(/\bfour\b/gi, "4").replace(/\bbe\b/gi, "b").replace(/\byou\b/gi, "u").replace(/\bat\b/gi, "@").replace(/\band\b/gi, "&");
  },
  bulkShortener: function(tweets){
    return tweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    });
  },
  selectiveShortener: function(tweet){
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var result = this.selectiveShortener(tweet);
    if (result.length >= 140) {
      return result.slice(0, 137) + "...";
    }
    return result;
  }
};
