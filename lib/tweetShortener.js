'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    tweet = tweet.replace(/\b(to|too|two)\b/gi, "2")
    tweet = tweet.replace(/\bhello\b/gi, "hi")
    tweet = tweet.replace(/\bbe\b/gi, "b")
    tweet = tweet.replace(/\byou\b/gi, "u")
    tweet = tweet.replace(/\bat\b/gi, "@")
    tweet = tweet.replace(/\band\b/gi, "&")
    tweet = tweet.replace(/\b(for|four)\b/gi, "4")
    return tweet
  },
  bulkShortener: function(tweets){
    return tweets.map(function(tweet) {
      return tweetShortener.wordSubstituter(tweet)
    }, this)
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      tweet = tweetShortener.wordSubstituter(tweet)
    }
    return tweet
  },
  shortenedTruncator: function(tweet){
    tweet = tweetShortener.selectiveShortener(tweet)
    if (tweet.length > 140) {
      tweet = tweet.slice(0, 137) + "..."
    }
    return tweet
  }
};
