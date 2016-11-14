'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
    var substitutedTweet = {
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
    //  I can use the word boundary \b so i can replace an entire word and not just the characters
    var pattern = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/ig;
    return tweet.replace(pattern, function replacer(match){
      return substitutedTweet[match.toLowerCase()];
    });
  },

  bulkShortener: function(tweets) {
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

   shortenedTruncator: function(tweet) {
    var result = this.selectiveShortener(tweet);

    if (result.length >= 140) {
      // 137 because of the ellipsis
      return result.slice(0, 137) + "...";
    }

    return result;
  }
};


