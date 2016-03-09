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
    //var func = this.wordSubstituter;
    //debugger;
    tweets.forEach(this.wordSubstituter)
    return tweets;
  },
  selectiveShortener: function(){},
  shortenedTruncator: function(){}
};
