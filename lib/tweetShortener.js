'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var wordReplace = {
      "hello": 'hi',
      "to": '2',
      "two": '2',
      "too": '2',
      "for": '4',
      "four": '4',
      "be": 'b',
      "you": 'u',
      "at": '@',
      "and": '&',
    };
    var regExpression =  /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
    return tweet.replace(regExpression, function(match){
      return wordReplace[match.toLowerCase()];
    })
  },

  bulkShortener: function(tweets){
    return $.map(tweets, function(tweet, index){
      return tweetShortener.wordSubstituter(tweet);
    })
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet)
    } else {
      return tweet;
    }
  },

  shortenedTruncator: function(tweet){
    var shortened = tweetShortener.selectiveShortener(tweet);
    if (shortened.length >= 140) {
      return shortened.slice(0,137) + "...";
    }
      return shortened;
  }
};
