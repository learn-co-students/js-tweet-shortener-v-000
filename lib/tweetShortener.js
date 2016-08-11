'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var replacements = {
      "you" : "u",
      "two" : "2",
      "four" : "4",
      "hello" : "hi",
      "to" : "2",
      "too" : "2",
      "for" : "4",
      "be" : "b",
      "at" : "@",
      "and" : "&"
    }
    var substitutions = /\byou\b|\btwo\b|\bfour\b|\bhello\b|\btoo\b|\bto\b|\bfor\b|\bbe\b|\bat\b|\band\b/gi
    return tweet.replace(substitutions, function(match) {
      return replacements[match.toLowerCase()]})
  },
  bulkShortener: function(tweets){
    return tweets.map(tweetShortener["wordSubstituter"])
  },
  selectiveShortener: function(tweet){
    if(tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var shortenedTweet = tweetShortener.selectiveShortener(tweet);
    if (shortenedTweet.length > 140) {
      return shortenedTweet.slice(0, 137) + "...";
    } else {
      return shortenedTweet;
    }
  }
};
