'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var newTweet = [];
    var wordsFromOriginalTweet = tweet.split(" ");
    for (var i = 0; i < wordsFromOriginalTweet.length; i++) {
      switch (wordsFromOriginalTweet[i]) {
        case "hello":
          newTweet.push("hi");
          break;
        case "to":
        case "two":
        case "too":
          newTweet.push("2");
          break;
        case "For":
        case "for":
        case "four":
          newTweet.push("4");
          break;
        case "be":
          newTweet.push("b");
          break;
        case "you":
          newTweet.push("u");
          break;
        case "at":
          newTweet.push("@");
          break;
        case "and":
          newTweet.push("&");
          break;
        default:
          newTweet.push(wordsFromOriginalTweet[i]);
      }
    }
    return newTweet.join(" ");
  },
  bulkShortener: function(tweets){
    return tweets.map(this.wordSubstituter);
  },
  selectiveShortener: function(tweet){
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var selectivelyShortenedTweet = this.selectiveShortener(tweet);
    if (selectivelyShortenedTweet.length >= 140) {
      return selectivelyShortenedTweet.slice(0, 136) + " ...";
    } else {
      return selectivelyShortenedTweet;
    }
  }
};
