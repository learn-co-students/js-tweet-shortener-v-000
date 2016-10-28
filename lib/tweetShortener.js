'use strict';
var replacer = {
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

var tweetShortener = {
  wordSubstituter: function(tweet) {
    var newTweet =  tweet.split(" ").map(function(word) {
      for (var key in replacer) {
        if (word.toLowerCase() === key) {
          word = replacer[key];
          return word;
        } else {
          word = word;
        }
      }
      return word;
    }).join(" ");
    return newTweet;
  },
  bulkShortener: function(tweets) {
    return tweets.map(function(tweet) {
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
  shortenedTruncator: function(tweet) {
    if (tweet.length > 140) {
      var short = tweetShortener.selectiveShortener(tweet);
      short = short.substring(0, 137);
      return short += "...";
    } else {
      return tweet;
    }
  }
};


// tweet.replace(/hello|to|too|two|for|four|be|you|at|and/gi, function(matched){
//   return replacer[matched];
// });
