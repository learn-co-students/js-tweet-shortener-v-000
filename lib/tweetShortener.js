'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {

    var mapObj = {
      hello: "hi",
      to: "2",
      too: "2",
      two: "2",
      for: "4",
      four: "4",
      be: "b",
      you: "u",
      at: "@",
      and: "&"
    }

    var regex = /\bhello\b|\bto\b|\btoo\b|\btwo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi

    return tweet.replace(regex, function(matched) {
      return mapObj[matched.toLowerCase()]; //regex isn't looking for caps
    });
  },

  bulkShortener: function(tweets) {
    return tweets.map(function(tweet, index) {
      return tweetShortener.wordSubstituter(tweet); //call method on tweetShortener object, not on tweet callback
    });
  },

  selectiveShortener: function(tweet) {
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet); //use 'this' to call wordSubstituter on a tweetShortener object
    } else {
      return tweet;
    }
  },

  shortenedTruncator: function(tweet) {
    var result = this.selectiveShortener(tweet);

    if (result.length > 140) {
      return result.substring(0, 137) + "...";
    } else {
      return result;
    }
  }
};
