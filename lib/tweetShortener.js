'use strict';

// "hello" becomes 'hi'
// "to, two, too" become '2'
// "for, four" become '4'
// 'be' becomes 'b'
// 'you' becomes 'u'
// "at" becomes "@"
// "and" becomes "&"

var replacements = {
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

  // Write a method to shorten a string based on the allowed substitutes
  wordSubstituter: function(tweet){
  
  var word = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
      return tweet.replace(word, function(words){
        return replacements[words.toLowerCase()]
    });

  },
  // Write a method that iterates over the list of tweets, shortens them, and returns a new array with the shortened tweets
  bulkShortener: function(tweets){
    return tweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    });
  },

  // Write a new method that only does the substitutions if the tweet is longer than 140 characters. If the tweet is 140 characters or shorter, just return the original tweet.
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  // Write another method that truncates the tweet to 140 characters with an ellipsis if it's still too long after substitution. E.g. "Random Passage satisfies the craving for those details that ..."
  shortenedTruncator: function(tweet){
    var short = tweetShortener.selectiveShortener(tweet);
    if (short.length > 140) {
      short = short.slice(0,137);
      return short + "...";
    }
    else {
      return tweet;
    }
  }
};