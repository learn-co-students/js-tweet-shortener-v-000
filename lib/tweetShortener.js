'use strict';

var wordAlternative = {
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
  wordSubstituter: function(tweet){
    var tweetArray = tweet.split(" ");
    for (var i = 0; i < tweetArray.length; i++) {
      for (var prop in wordAlternative) {
        if (prop === tweetArray[i].toLowerCase()) {
          tweetArray[i] = wordAlternative[prop];
        }
      }
    }
    return tweetArray.join(" ");
  },
  bulkShortener: function(tweets){
    var bulkArray = [];
    tweets.forEach(function(tweet){
      bulkArray.push(tweetShortener.wordSubstituter(tweet));
    });
    return bulkArray;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var newTweet = tweetShortener.selectiveShortener(tweet);
    if (newTweet.length > 140) {
      var shortenedTweet = newTweet.slice(0, 137) + "...";
      return shortenedTweet;
    } else {
      return newTweet;
    }
  }
};
