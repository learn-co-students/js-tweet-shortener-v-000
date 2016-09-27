'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var shortTweet = tweet
        .replace(/\bhello\b/gi, "hi")
        .replace(/\btoo\b/gi, "2")
        .replace(/\bto\b/gi, "2")
        .replace(/\btwo\b/gi, "2")
        .replace(/\bfor\b/gi, "4")
        .replace(/\bfour\b/gi, "4")
        .replace(/\bbe\b/gi, "b")
        .replace(/\byou\b/gi, "u")
        .replace(/\bat\b/gi, "@")
        .replace(/\band\b/gi, "&");
    return shortTweet;
  },
  bulkShortener: function(tweetsArray){
    return tweetsArray.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this)
  },
  selectiveShortener: function(tweet){
    if(tweet.length > 140) {
      return this.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    // shortern the string is possible
    var shortenedTweet = this.selectiveShortener(tweet);
    // if still larger than 140, truncate
    if(shortenedTweet.length >= 140) {
      return shortenedTweet.substring(0,137) + "...";
    } else {
      return shortenedTweet;
    }
  }
};
