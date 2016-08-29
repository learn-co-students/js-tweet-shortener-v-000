'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweet = tweet
    var res = tweet.replace(/\bhello\b/gi, "hi");
    res = res.replace(/\bto\b/gi, "2");
    res = res.replace(/\btwo\b/gi, "2");
    res = res.replace(/\btoo\b/gi, "2");
    res = res.replace(/\bfor\b/gi, "4");
    res = res.replace(/\bfour\b/gi, "4");
    res = res.replace(/\bbe\b/gi, "b");
    res = res.replace(/\byou\b/gi, "u");
    res = res.replace(/\bat\b/gi, "@");
    res = res.replace(/\band\b/gi, "&");
    return res;
  },
  bulkShortener: function(tweets){
    var newTweets = []
    tweets.forEach(function(tweet){
      newTweets.push(tweetShortener.wordSubstituter(tweet))
    })
    return newTweets;
  },
  selectiveShortener: function(tweet){
    if (tweet.length <= 140){
      return tweet;
    } else {
      return tweetShortener.wordSubstituter(tweet);
    }
  },
  shortenedTruncator: function(tweet){
    var revisedTweet = tweetShortener.selectiveShortener(tweet);
    if (revisedTweet.length > 140){
      var ellipsis = "...";
      var tempTweet = revisedTweet.substring(0, 137);
      return tempTweet + ellipsis;
    } else {
      return revisedTweet;
    }
  }





};







