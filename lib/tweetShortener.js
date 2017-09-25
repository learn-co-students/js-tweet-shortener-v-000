'use strict';

var tweetShortener = {
  wordSubstituter: function(string) {
    var pairs = {
      'hello': 'hi',
      'Hello': 'hi',
      'to': '2',
      'two': '2',
      'too': '2',
      'For': '4',
      'for': '4',
      'four': '4',
      'be': 'b',
      'you': 'u',
      'at': '@',
      'and': '&',
    };
    var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
    var tweet = string.replace(regex, function(match){
      return pairs[match];
    });

    return tweet;
  },

  bulkShortener: function(tweets) {
    var shortened_array = [];
    for(var i = 0; i < tweets.length; i++){
      shortened_array.push(tweetShortener.wordSubstituter(tweets[i]));
    }
    return shortened_array;
  },

  selectiveShortener: function(tweet) {
    if (tweet.length > 140) {
      var shortened = this.wordSubstituter(tweet);
      return shortened;
    } else {
      return tweet;
    }

  },

  shortenedTruncator: function(tweet) {
    var shortened = this.selectiveShortener(tweet);

    if (shortened.length >= 140) {
      return shortened.slice(0, 137) + "...";
    } else {
      return shortened;
    }


  }
}
