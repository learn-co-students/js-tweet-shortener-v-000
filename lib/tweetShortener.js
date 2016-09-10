'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
    var mapObj = {
      hello: 'hi',
      to: '2',
      two: '2',
      too: '2',
      for: '4',
      four: '4',
      be: 'b',
      you: 'u',
      at: '@',
      and: '&'  
    };

    var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;

    return tweet.replace(regex, function(match){
      return mapObj[match.toLowerCase()];
    });
  },

  bulkShortener: function(tweets){
    return $.map(tweets, function(tweet, index) {
      return tweetShortener.wordSubstituter(tweet);
    });
  },

  selectiveShortener: function(tweet) {
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },

  shortenedTruncator: function(tweet){
    if (tweetShortener.selectiveShortener(tweet).length > 140) {
      return tweetShortener.selectiveShortener(tweet).slice(0,137) + "...";
    } else {
      return tweetShortener.selectiveShortener(tweet);
    }
  }
};
