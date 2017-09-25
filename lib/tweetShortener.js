'use strict';

var tweetShortener = {
  wordSubstituter: function(){},
  bulkShortener: function(){},
  selectiveShortener: function(){},
  shortenedTruncator: function(){}
};


var tweetShortener = {
  wordSubstituter: function(tweet){
    var shortWords = {
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
    var wordFinder = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
    return tweet.replace(wordFinder, function (match) {
      return shortWords[match.toLowerCase()];
    })
  },

  bulkShortener: function(tweets){
    return tweets.map(function (tweet) {
      return this.wordSubstituter(tweet);
    }, this);
  },

  selectiveShortener: function(tweet){
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },

  shortenedTruncator: function(tweet){
    var shortTweet = this.selectiveShortener(tweet);
    if (shortTweet.length > 140) {
      var toRemove = 137 - shortTweet.length;
      return shortTweet.slice(0, toRemove) + "...";
    }
    return shortTweet;
  }
};