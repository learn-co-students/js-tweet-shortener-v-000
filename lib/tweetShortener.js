'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    tweet = tweet.replace(/\b(hello)\b/gi, 'hi');
    tweet = tweet.replace(/\b(t(o|wo)o?)\b/gi, '2');
    tweet = tweet.replace(/\b(f(o|ou)r?)\b/gi, '4');
    tweet = tweet.replace(/\b(be)\b/gi, 'b');
    tweet = tweet.replace(/\b(you)\b/gi, 'u');
    tweet = tweet.replace(/\b(at)\b/gi, '@');
    tweet = tweet.replace(/\b(and)\b/gi, '&');
    return tweet;
  },
  bulkShortener: function(tweets){
    return tweets.map(function(t) {return this.wordSubstituter(t)}, this);
  },
  selectiveShortener: function(tweet){
  if (tweet.length >= 140) {return this.wordSubstituter(tweet)}
    return tweet
  },
  shortenedTruncator: function(tweet){
    var short = this.selectiveShortener(tweet)
    if (short.length >= 140) {return short.slice(0, 137) +"...";}
    return short;
  }
};
