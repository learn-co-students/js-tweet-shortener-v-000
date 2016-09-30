'use strict';

var substitutions = {
  'hello': 'hi',
  'to': '2',
  'two': '2',
  'too': '2',
  'for': '4',
  'four': '4',
  'be': 'b',
  'you': 'u',
  'at': '@',
  'and': '&'
};

var tweetShortener = {
  wordSubstituter: function(tweet) {
    for(var sub in substitutions) {
      var re = new RegExp(`\\b${sub}\\b`, 'gi');
      tweet = tweet.replace(re, substitutions[sub]);
    }
    return tweet;
  },
  bulkShortener: function(tweets) {
    return tweets.map(function(tweet) {
      return tweetShortener.wordSubstituter(tweet);
    });
  },
  selectiveShortener: function(tweet) {
    if (tweet.length <= 140) {
      return tweet;
    } else {
      return this.wordSubstituter(tweet);
    }
  },
  shortenedTruncator: function(tweet) {
    var shortenedTweet = this.selectiveShortener(tweet);
    if (shortenedTweet.length > 140) {
      return shortenedTweet.slice(0, 137)+'...';
    } else {
      return shortenedTweet;
    }
  }
};
