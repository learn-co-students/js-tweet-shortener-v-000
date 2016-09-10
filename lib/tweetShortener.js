'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var subs = {
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

    var str = tweet.split(" ");

    return str.map(function(word) {
      if (word.toLowerCase() in subs) {
        return word = subs[word.toLowerCase()];
      } else {
        return word;
      }  
    }).join(" ")
    
  },

  bulkShortener: function(tweets){
    return tweets.map(function(tweet){
      return this.wordSubstituter(tweet);
    }, this);
  },

  selectiveShortener: function(tweet){
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    } else {
      return tweet;
    };
  },

  shortenedTruncator: function(tweet){
    var str = this.selectiveShortener(tweet);
    if (str.length >= 140) {
      return str.substring(0,137) + "...";
    } else {
      return str;
    }
  }
};
