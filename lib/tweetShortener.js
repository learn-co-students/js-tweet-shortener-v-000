'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var newTweet = [];
    var tweets = tweet.split(" ");
    for (var i = 0; i < tweets.length; i++) {
      switch (tweets[i]) {
        case "hello":
          newTweet.push('hi');
          break;
        case "to":
        case "two":
        case "too":
          newTweet.push("2");
          break;
        case "for":
        case "For":
        case "four":
          newTweet.push("4");
          break;
        case "be":
          newTweet.push('b');
          break;
        case "you":
          newTweet.push('u');
          break;
        case "at":
          newTweet.push('@');
          break;
        case "and":
          newTweet.push("&");
          break;
        default:
          newTweet.push(tweets[i]);
      }
    }
    newTweet = newTweet.join(" ");
    return newTweet;
  },
  bulkShortener: function(allTweets){
    var shortTweets = [];
    for (var i = 0; i < allTweets.length; i++) {
      shortTweets.push(tweetShortener.wordSubstituter(allTweets[i]));
    }
    return shortTweets;
  },
  selectiveShortener: function(theTweet){
      if (theTweet.length <= 140) {
      return theTweet;
    } else {
      return tweetShortener.wordSubstituter(theTweet);
    }
  },
  shortenedTruncator: function(longTweet){
    if (longTweet.length <= 140) {
      return longTweet;
    } else {
      longTweet =  tweetShortener.wordSubstituter(longTweet);
      longTweet = longTweet.slice(0, 136);
      longTweet = longTweet + " ..."
      return longTweet;
    }
  }
};
