'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    return tweet.replace(/hello/ig, "hi")
      .replace(/\bto\b|\btwo\b|\btoo\b/ig, "2")
      .replace(/\bfor\b|\bfour\b/ig, "4")
      .replace(/\bbe\b/ig, "b")
      .replace(/\byou\b/ig, "u")
      .replace(/\bat\b/ig, "@")
      .replace(/\band\b/ig, "&");
  },
  bulkShortener: function(tweets){
    return tweets.map(this.wordSubstituter);
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return this.wordSubstituter(tweet);
    } else {
      return tweet
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.length > 140) {
     return this.wordSubstituter(tweet).slice(0, 137) + "...";
   } else {
    return tweet;
   }
  }
};
