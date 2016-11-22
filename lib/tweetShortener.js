'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var replacements = {
      "hello": 'hi',
      "to": '2',
      "two": '2',
      "too": '2',
      "for": '4',
      "four": '4',
      "be": 'b',
      "you": 'u',
      "at": '@',
      "and": '&',
    }
    var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
    // str.replace("search value", "new value")
    return tweet.replace(regex, function(match){
      // in the tweet, search for words in regex
      // for each match, return the shortened word found in replacements
      return replacements[match.toLowerCase()];
    });
  },

  bulkShortener: function(tweets){
    // use map to iterate through the tweets
    // in the callback function, substitute tweets for the new shortened words
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this);
  },
  
  selectiveShortener: function(tweet){
    // shorten tweet if its more than 140 characters
    // otherwise return the tweet as it is
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    }

    return tweet;
  },
  
  shortenedTruncator: function(tweet){
    // shorten the tweet if possible, store as var result
    var result = this.selectiveShortener(tweet);

    if (result.length >= 140) {
      debugger;
      return result.slice(0, 137) + "...";
    }

    return result;
  }
};
