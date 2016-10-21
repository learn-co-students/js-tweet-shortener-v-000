'use strict';

var tweetShortener = {
  wordSubstituter: function(tweets){
    var words = {
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
    }

    var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;

    return tweets.replace(regex, function(match){
      return words[match.toLowerCase()];
    });
  },

  bulkShortener: function(tweets){
    return tweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    });
    return tweets;
  },

  selectiveShortener: function(tweet){
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    }
    return tweet;
  },

  shortenedTruncator: function(tweet){
    var shortTweet = this.selectiveShortener(tweet);

    if (shortTweet.length >= 140) {
      return shortTweet.slice(0,137) + '...';
    }
    return shortTweet;
  }
};
