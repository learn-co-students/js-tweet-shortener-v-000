'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
    var substitute = {
      'hello' : 'hi',
      'to' : '2',
      'two' : '2',
      'too' : '2',
      'be' : 'b',
      'you' : 'u',
      'at' : '@',
      'and' : '&',
      'for' : '4',
      'four' : '4'
    };
    return tweet.split(" ").map(function(word) { return substitute[word.toLowerCase()] || word }).join(" ");
  },

  bulkShortener: function(tweets) {
    return tweets.map(function(tweet) { return tweetShortener.wordSubstituter(tweet) });
  },
  selectiveShortener: function(tweet) {
    return (tweet.length > 140) ? this.wordSubstituter(tweet) : tweet;
  },
  shortenedTruncator: function(tweet) {
    var modifiedTweet = this.selectiveShortener(tweet);
    if (modifiedTweet.length > 140) {
      return modifiedTweet.split("").slice(0, 136).join("") + " ..."
    } else {
      return modifiedTweet;
    }
  }

};
