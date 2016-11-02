'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var newTweet = [];
    var originalTweet = tweet.split(" ");
    for (var i = 0; i < originalTweet.length; i++) {
      switch(originalTweet[i]) {
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
        newTweet.push(originalTweet[i]); //each original word, if there isn't a match, just push it in as the original.
      };
    };
    return newTweet.join(" ");
  },
  bulkShortener: function(tweets){
    return tweets.map(this.wordSubstituter);
  },
  selectiveShortener: function(tweet){
// the only difference between these two is that one function shorterns "bulk", while this one shorterns a single tweet.
// provided that the length of the tweet is over 140 characters. If its not, then DONT shorten the tweet.
      if (tweet.length > 140){
      return this.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var shortendedTweet = this.selectiveShortener(tweet); //call the first shortener function first.
    if (shortendedTweet.length >= 140) { //IF AND ONLY IF the tweet is still longer than 140, then splice it and add the ellipses.
      return shortendedTweet.slice(0,137) + "...";
    } else {
      return shortendedTweet;
    }
  }
};
