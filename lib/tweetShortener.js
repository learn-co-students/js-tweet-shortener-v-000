'use strict';

var shorterWords = {
  "hello": "hi",
  "to": "2",
  "two": "2",
  "too": "2",
  "for": "4",
  "four": "4",
  "be": "b",
  "you": "u",
  "at": "@",
  "and": "&"
};

var tweetShortener = {

  wordSubstituter: function(tweet) {
    for (var key in shorterWords) {
      if (tweet.includes(key)) {
        var existingWord = new RegExp('\\b' + key + '\\b', 'ig');
        tweet = tweet.replace(existingWord, shorterWords[key]);
      }
    }
  return tweet;
  },

  bulkShortener: function(tweets) {
    return tweets.map(function(tweet) {
      return tweetShortener.wordSubstituter(tweet);
    });
  },

  selectiveShortener: function(tweet) {
    if (tweet.length > 140) return tweetShortener.wordSubstituter(tweet);
    return tweet;
  },

  shortenedTruncator: function(tweet) {
    var shortenedTweet = tweetShortener.wordSubstituter(tweet);
    if (shortenedTweet.length > 140) {
      return shortenedTweet.slice(0, 137).concat('...');
    }
    return tweet;
  }
};
