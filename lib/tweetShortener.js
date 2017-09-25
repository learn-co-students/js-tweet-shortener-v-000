'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var wordReplacements = {
      'hello': 'hi',
      'to': "2",
      'too': "2",
      'two': "2",
      'for': '4',
      'four': '4',
      'be': 'b',
      'you': 'u',
      'at': '@',
      'and': '&'
    }
    var wordSearch = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi

    return tweet.replace(wordSearch, function(match){
      return wordReplacements[match.toLowerCase()];
    })
  },
  bulkShortener: function(tweets){
    return tweets.map(function(tweet){
      return this.wordSubstituter(tweet);
    }, this)
  },
  selectiveShortener: function(tweet){
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var shortenedTweet = this.selectiveShortener(tweet);
    if (shortenedTweet.length > 140) {
      var amountToRemove = 137 - shortenedTweet.length;
      return shortenedTweet.slice(0, amountToRemove) + "...";
    }else {
      return shortenedTweet
    }
  }
};
