'use strict';

var longWords = ["hello", "to", "two", "too", "for", "four", "be", "you", "at", "and"];
var shortWords = ["hi", "2", "2", "2", "4", "4", "b", "u", "@", "&"];

var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweetArray = tweet.split(" ");
    var newTweet = "";
    tweetArray.forEach(function(word){
      if (longWords.indexOf(word.toLowerCase()) > -1){
        newTweet += " " + shortWords[longWords.indexOf(word.toLowerCase())];
      } else {
        newTweet += " " + word;
      }
    });
    return newTweet.trim();
  },

  bulkShortener: function(tweets){
    var newTweets = [];
    tweets.forEach(function(tweet){
      newTweets.push(tweetShortener.wordSubstituter(tweet));
    })
    return newTweets
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet)
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var shortened = tweetShortener.selectiveShortener(tweet);
    if (shortened.length > 140) {
      return shortened.substring(0,137)+"...";
    } else {
      return shortened;
    }
  }
};
