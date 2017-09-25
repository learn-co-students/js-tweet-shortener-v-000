'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
// replaces longer words with shorter ones
   var replacements = {
     "hello": 'hi',
    "to": '2',
    "two": '2',
    "too": '2',
    "for": '4',
    "four": '4',
    'be': 'b',
    'you': 'u',
    "at": "@",
    "and": "&",
  };
// sets regex to seek out above words within a given tweet.
    var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
    // matches those words from tweet
    return tweet.replace(regex, function(match){
      // returns tweet with replaced words
      return replacements[match.toLowerCase()];
    });
  },

  bulkShortener: function(tweets){
// replaces longer tweet with shorter tweet in bulk
  return tweets.map(function(tweet) {
    return this.wordSubstituter(tweet);
  }, this);
  },

  selectiveShortener: function(tweet){
// shortens tweets longer than 140 characters
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    }
    return tweet;
  },

  shortenedTruncator: function(tweet){
// replaces longer
  var result = this.selectiveShortener(tweet);

  if (result.length >= 140) {
    return result.slice(0, 137) + "...";
  }
    return result;
  }
}
