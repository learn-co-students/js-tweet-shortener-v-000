'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var shortenedWords = {
      "hello": 'hi',
      "to": '2',
      "two": '2',
      "too": '2',
      "for": '4',
      "four": '4',
      'be': 'b',
      'you': 'u',
      "at": "@",
      "and": "&"
    };

    var substitution = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;

    return tweet.replace(substitution, function(match) {
      return shortenedWords[match.toLowerCase()];
    });
  },

  bulkShortener: function(tweets){
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this);
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 141) {
      return this.wordSubstituter(tweet);
    }

    return tweet;
  },

  shortenedTruncator: function(tweet){
    var modifiedTweet = this.selectiveShortener(tweet);

    if (modifiedTweet.length > 141) {
      return modifiedTweet.slice(0, 137) + "...";
    }

    return modifiedTweet;
  }
};


// "hello" becomes 'hi'
// "to, two, too" become '2'
// "for, four" become '4'
// 'be' becomes 'b'
// 'you' becomes 'u'
// "at" becomes "@"
// "and" becomes "&"