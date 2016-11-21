'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
    var substitutions = {
      "hello": 'hi',
      "to": '2',
      "two": '2',
      "too": '2',
      "for": '4',
      "four": '4',
      "be": 'b',
      "you": 'u',
      "at": '@',
      "and": '&'
    };

    var sentence = tweet.split(" ");

    return sentence.map(function(word) {
      if (word.toLowerCase() in substitutions) {
        return word = substitutions[word.toLowerCase()];
      }
      else {
        return word;
      }
    }).join(" ")
  },

  bulkShortener: function(tweets) {
    var shortenedTweets = [];

    tweets.forEach(function(tweet) {
      shortenedTweets.push(tweetShortener.wordSubstituter(tweet));
    });
    return shortenedTweets;
  },

  selectiveShortener: function(tweet) {
    if (tweet.length <= 140) {
      return tweet;
    }
    else {
      return this.wordSubstituter(tweet);
    }
  },

  shortenedTruncator: function(tweet) {
    // var shortenedString = tweetShortener.selectiveShortener(tweet);
    var shortenedString = this.selectiveShortener(tweet);

    if (shortenedString.length <= 140) {
      return shortenedString;
    }
    else {
      return shortenedString.slice(0, 137).concat('...');
    }
  }
};