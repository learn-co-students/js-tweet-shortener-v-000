'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    tweet = tweet.replace(/\b(hello)\b/ig, "hi");
    tweet = tweet.replace(/\b(to|two|too)\b/ig, "2");
    tweet = tweet.replace(/\b(for|four)\b/ig, "4");
    tweet = tweet.replace(/\b(be)\b/ig, "b");
    tweet = tweet.replace(/\b(you)\b/ig, "u");
    tweet = tweet.replace(/\b(at)\b/ig, "@");
    tweet = tweet.replace(/\b(and)\b/ig, "&");
    return tweet
  },
  bulkShortener: function(tweets){
    var shortenedTweets = [];
    for (var i = 0; i < tweets.length; i++){
      shortenedTweets.push(this.wordSubstituter(tweets[i]));
    }
    return shortenedTweets;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      tweet = this.wordSubstituter(tweet);
    } 
    return tweet;
  },
  shortenedTruncator: function(tweet){
    var shortenedTweet = this.wordSubstituter(tweet);
    if (shortenedTweet.length > 140) {
      tweet = shortenedTweet.slice(0, 137);
      tweet += "...";
    }
    return tweet;  
  }
};
