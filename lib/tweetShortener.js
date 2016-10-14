'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
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
    var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
    return tweet.replace(regex, function(match){
      return replacements[match.toLowerCase()];
    });
  },

  bulkShortener: function(tweets){
    var shortenedTweets = []
    for(var i = 0; i < tweets.length; i++) {
      shortenedTweets.push(tweetShortener.wordSubstituter(tweets[i]));
    };
    return shortenedTweets;
  },

  selectiveShortener: function(tweet){
    if(tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    };
  },

  shortenedTruncator: function(tweet){
    if(tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet).slice(0,137) + "...";
    } else {
      return tweet;
    };
  }
};
