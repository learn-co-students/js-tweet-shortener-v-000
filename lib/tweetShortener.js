'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var wordList = {
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
    var words = tweet.split(/([_\W])/);

    var finalWords = words.map(function(word) {
      if (wordList.hasOwnProperty(word.toLowerCase())) {
        return wordList[word.toLowerCase()];
      } else {
        return word;
      }
    }).join("");
    return finalWords;
  },
  bulkShortener: function(tweets){
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this);
  },
  selectiveShortener: function(tweet){
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    } else {
      return tweet
    }
  },
  shortenedTruncator: function(tweet){
    var initialShortening = this.selectiveShortener(tweet);
    if (initialShortening.length >= 140) {
      return initialShortening.slice(0, 137) + '...';
    } else {
      return initialShortening;
    }
  }
};
