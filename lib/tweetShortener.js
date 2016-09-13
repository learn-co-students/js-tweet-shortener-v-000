'use strict';
var substitutes = {hello: "hi", to: "2", two: "2", too: "2", for: "4", For: "4", four: "4", be: "b", you: "u", at: "@", and: "&"}
var tweetShortener = {

  wordSubstituter: function(tweet) {
    // create array of words to be replaced
    var arrayOfSubstitutes = Object.keys(substitutes)
    // create array of tweet words
    var tweetWords = tweet.split(" ");
    // iterate and compare tweetWords with arrayOfSubstitutes
    for (var i = 0; i < tweetWords.length; i++) {
      for (var j = 0; j < arrayOfSubstitutes.length; j++) {
        if (tweetWords[i] == arrayOfSubstitutes[j]) {
          tweetWords[i] = substitutes[arrayOfSubstitutes[j]]
        }
      }
    }
    // convert array of tweetWords back to string
    var shortenedString = tweetWords.join(" ")
    return shortenedString
  },


    bulkShortener: function(tweets) {
      return tweets.map(function(tweet) {
        return this.wordSubstituter(tweet);
      }, this);
    },

    selectiveShortener: function(tweet) {
      if (tweet.length >= 140) {
        return this.wordSubstituter(tweet);
      }

      return tweet;
    },

    shortenedTruncator: function(tweet) {
      var result = this.selectiveShortener(tweet);

      if (result.length >= 140) {
        return result.slice(0, 137) + "...";
      }

      return result;
    }
  };
