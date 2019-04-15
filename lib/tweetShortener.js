'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var two = "2"
    var four = "4"
    var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;

    return tweet.replace(regex, function(tweet){
      switch (tweet.toLowerCase()) {
        case "four":
          return four;
        case "for":
          return four;
        case "to":
          return two;
        case "two":
          return two;
        case "too":
          return two;
        case "be":
          return "b";
        case "you":
          return "u";
        case "at":
          return "@";
        case "and":
          return "&";
        default:
          return tweet;
      }
    });
  }, //wordSubstituter

  bulkShortener: function(tweets){
    return tweets.map(function(tweet){
      return this.wordSubstituter(tweet);
    }, this);

  },

  selectiveShortener: function(tweet){
    if(tweet.length > 140){
      return this.wordSubstituter(tweet)
    } else {
      return tweet;
    }
  },

  shortenedTruncator: function(tweet){
    var shortenedTweet = this.selectiveShortener(tweet);

    if(shortenedTweet.length > 140){
      return shortenedTweet.slice(0,137) + "...";
    } else {
      return shortenedTweet;
    }
  }

};//tweetShortener
