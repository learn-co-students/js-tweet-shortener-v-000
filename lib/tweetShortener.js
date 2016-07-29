'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    // words to substitute
    var wordShorted = {
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
    var wordFound = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
    return tweet.replace(wordFound, function(match) {
      return wordShorted[match.toLowerCase()];
    });
  },

  bulkShortener: function(tweets){
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this);
  },

  selectiveShortener: function(tweet){
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    }
    return tweet;
  },

  shortenedTruncator: function(tweet){
    var result = this.selectiveShortener(tweet);
    if (result.length >= 140) {
      return result.slice(0, 137) + "...";
    }
    return result;
  }
};
