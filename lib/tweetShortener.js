'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var substituded_tweet = tweet.replace(/\bhello\b/gi, "Hi");
    substituded_tweet = substituded_tweet.replace(/\bto\b|\btoo\b|\btwo\b/gi, "2");
    substituded_tweet = substituded_tweet.replace(/\bbe\b/gi, "b");
    substituded_tweet = substituded_tweet.replace(/\bfour\b|\bfor\b/gi, "4");
    substituded_tweet = substituded_tweet.replace(/\byou\b/gi, "u");
    substituded_tweet = substituded_tweet.replace(/\bat\b/gi, "@");
    substituded_tweet = substituded_tweet.replace(/\band\b/gi, "&");
    return substituded_tweet;
  },
  bulkShortener: function(tweets){
    var shortened_tweets = [];

    for (var i=0; i<tweets.length; i++){
		    shortened_tweets[i]= this.wordSubstituter(tweets[i]);
  	}
    return shortened_tweets;
  },
  selectiveShortener: function(tweet){
    var longtweet = tweet;
    if (tweet.length > 140)
      longtweet = this.wordSubstituter(tweet);
    return longtweet;

  },
  shortenedTruncator: function(tweet){
    var longtweet = this.selectiveShortener(tweet);
    if (longtweet.length > 140)
      longtweet = longtweet.slice(0, 137) + "...";
    return longtweet;
  }
};
