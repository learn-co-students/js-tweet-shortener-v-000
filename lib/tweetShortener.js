'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    tweet = tweet.replace(/\b(hello)\b/gi, 'hi');
    tweet = tweet.replace(/\b(t(o|wo)o?)\b/gi, '2');
    tweet = tweet.replace(/\b(for|four)\b/gi, '4');
    tweet = tweet.replace(/\b(be)\b/gi, 'b');
    tweet = tweet.replace(/\b(you)\b/gi, 'u');
    tweet = tweet.replace(/\b(at)\b/gi, '@');
    tweet = tweet.replace(/\b(and)\b/gi, '&');
    return tweet;
  },
  bulkShortener: function(tweets){
    var shortenedTweets = [];

    for (var i = 0; i < tweets.length; i++) {
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
    tweet = this.selectiveShortener(tweet);
    if (tweet.length > 140) {
      tweet = tweet.slice(0, 137) + "...";
    }

    return tweet;
  }
};