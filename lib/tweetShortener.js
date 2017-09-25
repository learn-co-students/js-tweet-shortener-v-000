'use strict';

var wordBank = {
  "hello": 'hi',
  "to": '2',
  "two": '2',
  "too": '2',
  "for": '4',
  "four": '4',
  'be': 'b',
  'you': 'u',
  "at": "@",
  "and": "&"
}

var tweetShortener = {
  wordSubstituter: function(tweet){
    var splitString = tweet.split(' ');
    splitString.forEach(function(word, i) {
      for (var key in wordBank){
        if (key === word.toLowerCase()) {
          splitString[i] = wordBank[key];
        }
      }
    })
    return splitString.join(' ');
  },
  bulkShortener: function(tweets){
    var shortenedTweets = [];
    tweets.forEach(function(tweet, i) {
        shortenedTweets.push(tweetShortener.wordSubstituter(tweet));
      });
    return shortenedTweets;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var shortenedTweet = tweetShortener.selectiveShortener(tweet);
    if (shortenedTweet.length > 140) {
      shortenedTweet = shortenedTweet.substring(0, 137);
      return shortenedTweet + '...';
    } else {
    return shortenedTweet;
    }
  }
};
