'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
    var replacementWords = {
      "hello": "hi",
      'to': '2',
      'too': '2',
      'two': '2',
      'for': '4',
      'four': '4',
      'be': 'b',
      'you': 'u',
      'at': '@',
      'and': '&'
    };
    var newTweet = tweet.split(" ").map(function(word) {
      for (var key in replacementWords) {
        if (word.toLowerCase() === key) {
          word = replacementWords[key];
        }
      }
      return word;
    }).join(" ");
    return newTweet;
  },

  bulkShortener: function(tweets) {
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this );
  },

  selectiveShortener: function(tweet) {
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    }
      return tweet;
  },

  shortenedTruncator: function(tweet) {
    var result = this.selectiveShortener(tweet);

    if (result.length >= 140) {
      return result.slice(0,137) + "...";
    }
    return result;
  }
};
